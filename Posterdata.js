import { Posterpost, Posterget, Postdelete, Posterput } from './Posterdb.js';
const router=express.Router();
import { client } from './index.js';
import  express from 'express';
import {auth}  from './middleware/auth.js';
router.post("/", async function (req, res) {
    const data1 = req.body;
    console.log(data1);
    //create a db,table
    const result1 = await Posterpost(data1);
    res.send(result1);
    });

  router.get("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    
    const result = await Posterget(id);
    res.send(result);
});
router.get("/", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;

    const result = await  client.db("socialmedia")
    .collection("Poster").find().toArray();
    res.send(result);
});

router.delete("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Postdelete(id);
    res.send(result);
});


router.put("/:id", async function (req, res) {
    console.log(req.params);
    const { id } = req.params;
    const updateData = req.body;
    //const stud=student.find((mv)=>mv.id === id);
    const result = await Posterput(id, updateData);
    res.send(result);
});
export const PosterRouter=router;