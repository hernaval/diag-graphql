import { CreateSurveyArgs } from "./args/CreateSurveyArgs";
import { Survey } from "../../../models/Survey";
export declare class CreateSurveyResolver {
    createSurvey(ctx: any, args: CreateSurveyArgs): Promise<Survey>;
}
