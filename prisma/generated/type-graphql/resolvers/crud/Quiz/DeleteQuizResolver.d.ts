import { DeleteQuizArgs } from "./args/DeleteQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class DeleteQuizResolver {
    deleteQuiz(ctx: any, args: DeleteQuizArgs): Promise<Quiz | null>;
}
