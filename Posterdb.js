import { client } from './index.js';
import { ObjectId } from 'mongodb';
export async function Posterput(id, updateData) {
    return await client.db("socialmedia")
        .collection("Poster").updateOne({_id: ObjectId(id)}, { $set: updateData });
}
export function Postdelete(id) {
    return client.db("socialmedia")
        .collection("Poster").deleteOne({_id: ObjectId(id)});
}
export async function Posterget(id) {
    return await client.db("socialmedia")
        .collection("Poster").findOne({_id: ObjectId(id)});
}
export async function Posterpost(data1) {
    return await client.db("socialmedia")
        .collection("Poster").insertOne(data1);
}

