import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
        data :{
            username : "jaya",
            password: "123456789",
            age: 26,
            city: "Hyd"
        }
    })
}

async function deleteUser(){
    await client.user.delete({
        where: {
            id: 1
        }
    })
}
async function updateUser(){
    await client.user.update({
        where: {
            id: 1
        },
        data:{
            city: "Hyderabad"
        }
    })
}
async function getUser(){
    const userData = await client.user.findFirst({
        where:{
            id:1
        },
        // select:{
        //     username : true
        // }
    })

    console.log(userData);
}

getUser();