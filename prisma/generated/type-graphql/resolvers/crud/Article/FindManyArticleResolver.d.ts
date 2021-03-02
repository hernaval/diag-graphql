import { FindManyArticleArgs } from "./args/FindManyArticleArgs";
import { Article } from "../../../models/Article";
export declare class FindManyArticleResolver {
    articles(ctx: any, args: FindManyArticleArgs): Promise<Article[]>;
}
