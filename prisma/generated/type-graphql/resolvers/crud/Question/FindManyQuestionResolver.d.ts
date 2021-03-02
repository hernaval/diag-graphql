import { FindManyQuestionArgs } from "./args/FindManyQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindManyQuestionResolver {
    questions(ctx: any, args: FindManyQuestionArgs): Promise<Question[]>;
}
