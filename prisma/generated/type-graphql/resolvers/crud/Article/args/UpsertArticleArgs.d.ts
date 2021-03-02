import { ArticleCreateInput } from "../../../inputs/ArticleCreateInput";
import { ArticleUpdateInput } from "../../../inputs/ArticleUpdateInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";
export declare class UpsertArticleArgs {
    where: ArticleWhereUniqueInput;
    create: ArticleCreateInput;
    update: ArticleUpdateInput;
}
