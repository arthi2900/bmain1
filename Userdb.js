import { client } from './index.js';
import { ObjectId } from 'mongodb';
export function Userput(id, updateData) {
    return client.db("socialmedia")
        .collection("User").updateOne({_id: ObjectId(id)}, { $set: updateData });
}
export async function Userdelete(id) {
    return await client.db("socialmedia")
        .collection("User").deleteOne({_id: ObjectId(id)});
}
export async function Userget(id) {
    return await client.db("socialmedia")
        .collection("User").find({_id: ObjectId(id)}).toArray();
}

export async function Userpost(data) {
    return await client.db("socialmedia")
        .collection("User").insertOne(data);
}

export async function Usersignuppost(data) {
    return await client.db("socialmedia")
        .collection("User").insertOne(data);
}
export async function getUserByName(name) {
    return await client.db("socialmedia")
        .collection("User").findOne({ name:name });
}
