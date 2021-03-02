import { FindManyQuizArgs } from "./args/FindManyQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class FindManyQuizResolver {
    quizzes(ctx: any, args: FindManyQuizArgs): Promise<Quiz[]>;
}
