import { DeleteSurveyArgs } from "./args/DeleteSurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class DeleteSurveyResolver {
    deleteSurvey(ctx: any, args: DeleteSurveyArgs): Promise<Survey | null>;
}
