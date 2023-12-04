import { config } from "dotenv";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
config();

const jwtSecret = process.env.SECRET_JWT_STR;

const register = async(req, res)=>{
    const { name, username, email, password } = req.body;
    if(!name ||!username ||!email ||!password){return res.status(404).json({success: false, message: "Please enter all the fields"})}
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await userModel.create({ name, username, email, password:hashedPassword });
        const { _id } = user;
        const token = jwt.sign({_id, name, email, username}, jwtSecret)
        res.status(200).json({success: true, token })
    }catch (err){
        res.status(500).json({success: false, message: err.message})
    }
};

const login = async(req, res)=>{
    const { email, password } = req.body;
    if(!email ||!password){return res.status(404).json({status: false, message: 'Please enter all the fields'})};
    const user = await userModel.findOne({email});

    const matchPass = await bcrypt.compare(password, user.password);
    if(!matchPass){return res.status(404).json({success: false, message: "password does not matched"})};

    if(!user){return res.status(404).json({success: false, message: "user not found"})};
    const { name, username, _id } = user;
    const token = jwt.sign({_id, name, email, username}, jwtSecret);
    res.status(200).json({ success: true, token })
};

export { register, login }