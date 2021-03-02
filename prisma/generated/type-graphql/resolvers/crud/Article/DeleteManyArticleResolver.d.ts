import { DeleteManyArticleArgs } from "./args/DeleteManyArticleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyArticleResolver {
    deleteManyArticle(ctx: any, args: DeleteManyArticleArgs): Promise<AffectedRowsOutput>;
}
