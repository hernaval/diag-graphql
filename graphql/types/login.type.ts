import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class LoginType {
  @Field({ nullable: true })
  token?: string;
}

@ObjectType()
export class LoginClientType{
  @Field({nullable : true})
  token?: String

  @Field({nullable : true})
  error? : String
}