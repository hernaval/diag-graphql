import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User, UserCreateInput } from "../../../prisma/generated/type-graphql";
import converters from "../../../utils/format";
import logger from "../../../utils/logger";
import { SignupClientType } from "../../types/signup.type";
import moment = require("moment");

interface Context{
    prisma : PrismaClient
}

@Resolver(() => SignupClientType)
export class SignupClientResolver{
    @Mutation(() => SignupClientType)
    async signupClient(
        @Ctx() {prisma} : Context,
        @Arg("data") clientInfo : UserCreateInput
    ) : Promise<SignupClientType | null>{
        //
        try{

        const {email,passwordHash}  = clientInfo

        /* check if email exist  */
        const user : User = await prisma.user.findFirst({
            where: {
                email 
            },
        });

        if(user){
            return {
                error : "Cet utilisateur est déjà inscrit"
            }
        }
        clientInfo.passwordHash = await converters.toHash(passwordHash)
        clientInfo.createdDate = new Date(moment().format())
        clientInfo.updatedDate = new Date(moment().format())
        clientInfo.status = "ACTIVATED"
        //true because of testing
        clientInfo.emailConfirmed = true

        let newUser : User = await prisma.user.create({
            data : clientInfo 
        })


        return {
            user : newUser
        }
            
        }catch(e){
            logger.info(`error here ${e}`)
            return {
                error :"Une erreur est survenue"
            }
        }
        
        
    }
}