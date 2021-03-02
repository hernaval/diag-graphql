import { UpdateSurveyArgs } from "./args/UpdateSurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class UpdateSurveyResolver {
    updateSurvey(ctx: any, args: UpdateSurveyArgs): Promise<Survey | null>;
}
