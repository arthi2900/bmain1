import { Userget, Userdelete, Userput,Userpost } from "./Userdb.js";
import  express from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {auth}  from './middleware/auth.js';
import { client } from './index.js';
const router=express.Router();
router.delete("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userdelete(id);
    res.send(result);
});
router.put("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const updateData = req.body;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userput(id, updateData);
    res.send(result);
});
router.post("/", async function (req, res) {
    const data = req.body;
    console.log(data);
    //create a db,table
    const result = await Userpost(data);
    res.send(result);
});
router.get("/", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await  client.db("socialmedia")
    .collection("User").find().toArray();
    res.send(result);
});

router.get("/:id",async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Userget(id);
    res.send(result);
});
export const UserRouter=router;
