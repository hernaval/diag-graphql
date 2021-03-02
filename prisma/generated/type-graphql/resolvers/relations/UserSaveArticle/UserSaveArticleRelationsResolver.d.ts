import { Article } from "../../../models/Article";
import { User } from "../../../models/User";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
export declare class UserSaveArticleRelationsResolver {
    User(userSaveArticle: UserSaveArticle, ctx: any): Promise<User>;
    Article(userSaveArticle: UserSaveArticle, ctx: any): Promise<Article>;
}
