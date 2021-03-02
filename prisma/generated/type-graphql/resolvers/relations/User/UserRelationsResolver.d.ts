import { Survey } from "../../../models/Survey";
import { User } from "../../../models/User";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
import { UserArticlesArgs } from "./args/UserArticlesArgs";
import { UserSurveysArgs } from "./args/UserSurveysArgs";
export declare class UserRelationsResolver {
    Surveys(user: User, ctx: any, args: UserSurveysArgs): Promise<Survey[]>;
    Articles(user: User, ctx: any, args: UserArticlesArgs): Promise<UserSaveArticle[]>;
}
