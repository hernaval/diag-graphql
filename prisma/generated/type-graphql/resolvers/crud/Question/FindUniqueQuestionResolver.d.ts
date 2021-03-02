import { FindUniqueQuestionArgs } from "./args/FindUniqueQuestionArgs";
import { Question } from "../../../models/Question";
export declare class FindUniqueQuestionResolver {
    question(ctx: any, args: FindUniqueQuestionArgs): Promise<Question | null>;
}
