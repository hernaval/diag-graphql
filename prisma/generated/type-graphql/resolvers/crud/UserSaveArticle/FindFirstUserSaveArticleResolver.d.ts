import { FindFirstUserSaveArticleArgs } from "./args/FindFirstUserSaveArticleArgs";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
export declare class FindFirstUserSaveArticleResolver {
    findFirstUserSaveArticle(ctx: any, args: FindFirstUserSaveArticleArgs): Promise<UserSaveArticle | null>;
}
