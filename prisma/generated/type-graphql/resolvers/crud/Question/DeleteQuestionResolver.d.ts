import { DeleteQuestionArgs } from "./args/DeleteQuestionArgs";
import { Question } from "../../../models/Question";
export declare class DeleteQuestionResolver {
    deleteQuestion(ctx: any, args: DeleteQuestionArgs): Promise<Question | null>;
}
