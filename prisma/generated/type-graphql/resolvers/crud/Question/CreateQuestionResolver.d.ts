import { CreateQuestionArgs } from "./args/CreateQuestionArgs";
import { Question } from "../../../models/Question";
export declare class CreateQuestionResolver {
    createQuestion(ctx: any, args: CreateQuestionArgs): Promise<Question>;
}
