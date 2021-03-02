import { UpsertArticleArgs } from "./args/UpsertArticleArgs";
import { Article } from "../../../models/Article";
export declare class UpsertArticleResolver {
    upsertArticle(ctx: any, args: UpsertArticleArgs): Promise<Article>;
}
