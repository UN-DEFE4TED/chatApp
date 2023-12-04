import mongoose from 'mongoose'

const db = process.env.DB_CONN_STR || 'mongodb://localhost:27017/chatapp';

mongoose.connect(db).then((val)=>{
    console.log('db connected successfully ' + val);
});