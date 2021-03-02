import { CreateArticleArgs } from "./args/CreateArticleArgs";
import { Article } from "../../../models/Article";
export declare class CreateArticleResolver {
    createArticle(ctx: any, args: CreateArticleArgs): Promise<Article>;
}
