import { FindManyUserSaveArticleArgs } from "./args/FindManyUserSaveArticleArgs";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
export declare class FindManyUserSaveArticleResolver {
    userSaveArticles(ctx: any, args: FindManyUserSaveArticleArgs): Promise<UserSaveArticle[]>;
}
