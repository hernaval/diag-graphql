import { UpdateQuestionArgs } from "./args/UpdateQuestionArgs";
import { Question } from "../../../models/Question";
export declare class UpdateQuestionResolver {
    updateQuestion(ctx: any, args: UpdateQuestionArgs): Promise<Question | null>;
}
