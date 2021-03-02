import { FindUniqueArticleArgs } from "./args/FindUniqueArticleArgs";
import { Article } from "../../../models/Article";
export declare class FindUniqueArticleResolver {
    article(ctx: any, args: FindUniqueArticleArgs): Promise<Article | null>;
}
