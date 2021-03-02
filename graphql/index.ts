
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as path from "path";
import { LoginAdminResolver } from "./resolvers/login.resolver";
import { LoginType, LoginClientType } from "./types/login.type";

/**---------- type-graphql ----------**/
import { ArticleCrudResolver, UserCrudResolver } from "../prisma/generated/type-graphql";
import { LoginClientResolver } from "./resolvers/auth/login.resolver";
import { SignupClientResolver } from "./resolvers/auth/signup.resolver";
import { ForgetPasswordClientResolver}from "./resolvers/auth/forgot-password.resolver";
import { SignupClientType } from "./types/signup.type";
import { ForgotPasswordType } from "./types/forgot-password.type";

async function schema() {

    /**---------- generate graphql schema ----------**/
    return await buildSchema({
        resolvers: [
        
            LoginAdminResolver,
            LoginClientResolver,
            SignupClientResolver,
            ForgetPasswordClientResolver,
            UserCrudResolver,
            ArticleCrudResolver

        ],
        orphanedTypes: [
            LoginType,
            LoginClientType,
            SignupClientType,
            ForgotPasswordType
        ],
       
        emitSchemaFile: path.resolve(__dirname, "./generated/schema.graphql"),
        validate: false,
    });
}

export default schema;    