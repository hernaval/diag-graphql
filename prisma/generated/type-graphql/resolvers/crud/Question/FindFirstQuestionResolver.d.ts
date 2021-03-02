import { FindFirstQuestionArgs } from "./args/FindFirstQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindFirstQuestionResolver {
    findFirstQuestion(ctx: any, args: FindFirstQuestionArgs): Promise<Question | null>;
}
