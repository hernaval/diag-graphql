import { FindFirstQuizArgs } from "./args/FindFirstQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class FindFirstQuizResolver {
    findFirstQuiz(ctx: any, args: FindFirstQuizArgs): Promise<Quiz | null>;
}
