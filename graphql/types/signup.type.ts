import { Field, ObjectType } from "type-graphql";
import { User } from "../../prisma/generated/type-graphql";

@ObjectType()
export class SignupClientType{
    @Field({nullable : true})
    error? : string

    @Field({nullable : true})
    user?: User

    
}