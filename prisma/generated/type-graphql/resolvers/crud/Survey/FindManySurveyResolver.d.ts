import { FindManySurveyArgs } from "./args/FindManySurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class FindManySurveyResolver {
    surveys(ctx: any, args: FindManySurveyArgs): Promise<Survey[]>;
}
