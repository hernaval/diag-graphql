import { Dimension } from "../../../models/Dimension";
import { Quiz } from "../../../models/Quiz";
import { QuizDimensionsArgs } from "./args/QuizDimensionsArgs";
export declare class QuizRelationsResolver {
    Dimensions(quiz: Quiz, ctx: any, args: QuizDimensionsArgs): Promise<Dimension[]>;
}
