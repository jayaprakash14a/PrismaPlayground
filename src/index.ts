import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();

app.get("/users", async function (req: any, res: any) {
    const userData = await client.user.findMany();
    res.json({
        userData
    })
})


app.get("/todos/:id", async function (req: any, res: any) {
    const id = req.params.id;
    const userData = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true
        }
    })

    res.json({
        userData
    })

})

app.listen(3000)

async function createUser() {
    await client.user.create({
        data: {
            username: "jaya",
            password: "123456789",
            age: 26,
            city: "Hyd"
        }
    })
}

async function deleteUser() {
    await client.user.delete({
        where: {
            id: 1
        }
    })
}
async function updateUser() {
    await client.user.update({
        where: {
            id: 1
        },
        data: {
            city: "Hyderabad"
        }
    })
}
async function getUser() {
    const userData = await client.user.findFirst({
        where: {
            id: 1
        },
        // select:{
        //     username : true
        // },
        include: {
            todos: true
        }
    })

    console.log(userData);
}

// getUser();