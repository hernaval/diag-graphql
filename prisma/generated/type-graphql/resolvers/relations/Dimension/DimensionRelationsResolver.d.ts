import { Dimension } from "../../../models/Dimension";
import { Question } from "../../../models/Question";
import { Quiz } from "../../../models/Quiz";
import { DimensionQuestionsArgs } from "./args/DimensionQuestionsArgs";
export declare class DimensionRelationsResolver {
    Questions(dimension: Dimension, ctx: any, args: DimensionQuestionsArgs): Promise<Question[]>;
    Quiz(dimension: Dimension, ctx: any): Promise<Quiz>;
}
