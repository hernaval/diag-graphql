import { Dimension } from "../../../models/Dimension";
import { Question } from "../../../models/Question";
export declare class QuestionRelationsResolver {
    Dimension(question: Question, ctx: any): Promise<Dimension>;
}
