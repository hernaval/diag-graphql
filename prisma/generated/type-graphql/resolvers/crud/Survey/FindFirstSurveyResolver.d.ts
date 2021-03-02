import { FindFirstSurveyArgs } from "./args/FindFirstSurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class FindFirstSurveyResolver {
    findFirstSurvey(ctx: any, args: FindFirstSurveyArgs): Promise<Survey | null>;
}
