import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import moment = require("moment")
const prisma = new PrismaClient()

async function main(){
    await prisma.$connect();

    const articleSavedByUser = await prisma.article.update({
        where : {
            id :  await (await prisma.article.findFirst()).id
        },
        data : {
            Users  : {
        
                create :[
                    {
                        userId : await (await prisma.user.findFirst()).id,
                        dateSaved : new Date(moment().format())
                    }
                ]
            }
        }
    })
       

    console.log(articleSavedByUser)
    
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });