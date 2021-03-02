import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { User, UserUpdateInput, UserWhereInput, UserWhereUniqueInput } from "../../../prisma/generated/type-graphql";
import converters from "../../../utils/format";
import { ForgotPasswordType } from "../../types/forgot-password.type";
const Str = require("@supercharge/strings");
interface Context{
    prisma : PrismaClient
}

Resolver(() => ForgotPasswordType)
export class ForgetPasswordClientResolver{
    //send email with reset password link
    @Query(() => ForgotPasswordType)
    async sendResetPasswordLink(
        @Ctx() {prisma} : Context,
        @Arg("where") input : UserWhereUniqueInput
    ) : Promise<ForgotPasswordType | null>{

        try{

            const userRequestedReset : User = await prisma.user.findFirst({
                where :{
                    email : input.email
                }
            })

            if(!userRequestedReset){
                return {
                    error : "Cet utilisateur n'existe pas"
                }
            }

            await prisma.user.update({
                where  :{
                    email : input.email
                },
                data : {
                    forgotToken : Str.rand(25)
                }
            })

            //send reset link to email

            return {
                success  : true
            }
        }catch(e){

        }
    }

    //verify token
    @Query(() => ForgotPasswordType)
    async verifyTokenBeforeReset(
        @Ctx() {prisma} : Context,
        @Arg("token") token  : string,
        @Arg("email") email : string
    ) : Promise<ForgotPasswordType | null> {
        
        try{
            
        /* check token in link by user email   */
        const userRequestedReset : User = await prisma.user.findFirst({
            where : {
                email  
            }
        })

        if(userRequestedReset.forgotToken != token){
            return {
                error : "Vous n'êtes pas autorisé à accèder à ce lien"
            }
        }

        return {
            success : true
        }
        
        }catch(e){

        }
    }

    //reset password
    @Mutation(() => ForgotPasswordType )
    async resetClientPassword(
        @Ctx() {prisma} : Context,
        @Arg("data") clientInfo : UserUpdateInput,
    ) : Promise<ForgotPasswordType | null>{
        

        try{

           

            const userToUpdate : User = await prisma.user.update({
                where : {
                    email : clientInfo.email.set
                },
                data : {
                    passwordHash : await converters.toHash(clientInfo.passwordHash.set)
                }
            })
            
            return {
                success : true
            }
        }catch(e){
            return {
                error  : "une erreur est survenue"
            }
        }
    }
}
