import { FindUniqueSurveyArgs } from "./args/FindUniqueSurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class FindUniqueSurveyResolver {
    survey(ctx: any, args: FindUniqueSurveyArgs): Promise<Survey | null>;
}
