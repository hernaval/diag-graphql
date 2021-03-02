import { CreateQuizArgs } from "./args/CreateQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class CreateQuizResolver {
    createQuiz(ctx: any, args: CreateQuizArgs): Promise<Quiz>;
}
