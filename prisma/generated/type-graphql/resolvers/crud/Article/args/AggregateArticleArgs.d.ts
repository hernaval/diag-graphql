import { ArticleOrderByInput } from "../../../inputs/ArticleOrderByInput";
import { ArticleWhereInput } from "../../../inputs/ArticleWhereInput";
import { ArticleWhereUniqueInput } from "../../../inputs/ArticleWhereUniqueInput";
export declare class AggregateArticleArgs {
    where?: ArticleWhereInput | undefined;
    orderBy?: ArticleOrderByInput[] | undefined;
    cursor?: ArticleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
