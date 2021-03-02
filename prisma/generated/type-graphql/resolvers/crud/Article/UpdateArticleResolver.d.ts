import { UpdateArticleArgs } from "./args/UpdateArticleArgs";
import { Article } from "../../../models/Article";
export declare class UpdateArticleResolver {
    updateArticle(ctx: any, args: UpdateArticleArgs): Promise<Article | null>;
}
