
import { PrismaClient } from "@prisma/client";
import "reflect-metadata"
import { Arg, Ctx, Query, Resolver } from "type-graphql";
import logger from "../../../utils/logger";
import { LoginClientType } from "../../types/login.type";
import bcrypt = require("bcryptjs");

const Str = require("@supercharge/strings");

interface Context{
    prisma : PrismaClient
}

@Resolver(() => LoginClientType)
export class LoginClientResolver{
    @Query(() => LoginClientType, {nullable : true})
    async loginUser(
        @Ctx() {prisma} : Context,
        @Arg("email") email?:string,
        @Arg("password") password?:string
    ) : Promise<LoginClientType | null> {

        // ------ check user by email ------ //
        const user = await prisma.user.findFirst({
            where: {
                email
            },
        });

        if(!user){
            return {
                error : "Cet utilisateur n'existe pas"
            }
        }
   
        // ------ check if user email is confirmed------ //
        if(!user.emailConfirmed){
            return {
                error : "Cet utilisateur n'a pas encore activé son compte"
            }
        }

        // ------ check if user is not blocked ------ //

        if(user.status == "BLOCKED"){
            return {
                error : "Cet utilisateur est bloqué pour le moment"
            }
        }

        // ------ check user by password ------ //
        const isPasswordValid = await bcrypt.compare(
            password.trim(),
            user.passwordHash
        );

        if(!isPasswordValid){
            //uncomment because of testing 
            /*return {
                error : "Mot de passe incorrect"
            }*/
        }

       const payload : Object = {
            user : {
                id : user.id
            }
        }

        return {
            token : Str.random(25)
        }
        

    }
}
