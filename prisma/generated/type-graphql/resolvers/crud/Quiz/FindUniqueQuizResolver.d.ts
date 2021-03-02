import { FindUniqueQuizArgs } from "./args/FindUniqueQuizArgs";
import { Quiz } from "../../../models/Quiz";
export declare class FindUniqueQuizResolver {
    quiz(ctx: any, args: FindUniqueQuizArgs): Promise<Quiz | null>;
}
