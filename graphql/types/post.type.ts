import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class PostTest {
    @Field({ nullable: true })
    name?: string;
}