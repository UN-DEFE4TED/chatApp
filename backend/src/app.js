import dotenv from 'dotenv'
dotenv.config('./.env')

import express from 'express'
import cors from 'cors'

import userRouter from './routes/userRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/user', userRouter)
// app.use('/chat/world', userRouter)

app.get('/', (req, res)=>{
    res.send('hello backend....')
});

export default app;