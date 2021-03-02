import { FindFirstArticleArgs } from "./args/FindFirstArticleArgs";
import { Article } from "../../../models/Article";
export declare class FindFirstArticleResolver {
    findFirstArticle(ctx: any, args: FindFirstArticleArgs): Promise<Article | null>;
}
