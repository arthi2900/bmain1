import { Usersignuppost,getUserByName } from "./Userdb.js";
import  express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//import {auth}  from './middleware/auth.js';
import { client } from './index.js';
const router=express.Router();
async function genPassword(password){
    const salt=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,salt);
    console.log({salt,hashpassword});
    return hashpassword;
    }

router.post("/register",async function (req, res) {
    const {name,password,email} = req.body;
    const hashpassword= await genPassword(password);
    const newUser={
        name:name,email:email,password:hashpassword,
    }
           const result =await Usersignuppost(newUser);
    res.send(result);
});
router.post("/login",async function (req, res)
 {const { name, password } = req.body;
 const userFromDB = await getUserByName(name);
 console.log(userFromDB);
 if (!userFromDB) {res.status(401).send({ message: "Invalid credentials" });}
  else {const storedPassword = userFromDB.password; 
     const  isPasswordMatch = await bcrypt.compare(password, storedPassword);
    console.log("isPasswordMatch", isPasswordMatch);
    if (isPasswordMatch) {
              //const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY);
             
        res.send({ message: "Successfull login" ,name:name,id:userFromDB._id});}

 else {res.status(401).send({ message: "Invalid credentials" });}}});

 router.get("/Logout",async function  (req, res) {
    try{
        res.clearCookie('jwt');
        console.log("successfull logout");
        res.render("Login")
  
    }
 catch(error){
 res.status(500).send('error');
 }
  
    
    
});
export const UserlsRouter=router;