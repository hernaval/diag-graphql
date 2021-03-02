import { UpdateQuizArgs } from "./args/UpdateQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class UpdateQuizResolver {
    updateQuiz(ctx: any, args: UpdateQuizArgs): Promise<Quiz | null>;
}
