import { UpsertQuestionArgs } from "./args/UpsertQuestionArgs";
import { Question } from "../../../models/Question";
export declare class UpsertQuestionResolver {
    upsertQuestion(ctx: any, args: UpsertQuestionArgs): Promise<Question>;
}
