import { UpsertQuizArgs } from "./args/UpsertQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class UpsertQuizResolver {
    upsertQuiz(ctx: any, args: UpsertQuizArgs): Promise<Quiz>;
}
