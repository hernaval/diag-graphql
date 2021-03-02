import { Article } from "../../../models/Article";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
import { ArticleUsersArgs } from "./args/ArticleUsersArgs";
export declare class ArticleRelationsResolver {
    Users(article: Article, ctx: any, args: ArticleUsersArgs): Promise<UserSaveArticle[]>;
}
