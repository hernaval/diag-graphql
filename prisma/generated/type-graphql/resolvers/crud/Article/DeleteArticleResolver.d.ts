import { DeleteArticleArgs } from "./args/DeleteArticleArgs";
import { Article } from "../../../models/Article";
export declare class DeleteArticleResolver {
    deleteArticle(ctx: any, args: DeleteArticleArgs): Promise<Article | null>;
}
