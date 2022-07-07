import  express from 'express';
import {MongoClient} from "mongodb";
import  {UserRouter} from './Userdata.js';
import  {UserlsRouter} from './Userauthls.js';
import  {PosterRouter} from './Posterdata.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
//const MONGO_URL="mongodb://localhost/";
const PORT=process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;
export const app=express(); 
app.use (cors(
    {
        origin:"*"
    }
));
app.use(express.json());
async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect();
    console.log("mongo connect");
    return client;
}
export const client=await createConnection();
app.use('/user',UserRouter);
app.use('/posts',PosterRouter);
app.use('/aut',UserlsRouter);
app.listen(PORT,function(){
    console.log(`successfull start from ${PORT}`)
})



