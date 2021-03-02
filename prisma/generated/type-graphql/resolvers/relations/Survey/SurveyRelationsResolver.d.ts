import { Survey } from "../../../models/Survey";
import { User } from "../../../models/User";
export declare class SurveyRelationsResolver {
    User(survey: Survey, ctx: any): Promise<User>;
}
