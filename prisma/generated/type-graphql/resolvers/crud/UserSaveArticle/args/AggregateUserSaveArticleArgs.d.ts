import { UserSaveArticleOrderByInput } from "../../../inputs/UserSaveArticleOrderByInput";
import { UserSaveArticleWhereInput } from "../../../inputs/UserSaveArticleWhereInput";
import { UserSaveArticleWhereUniqueInput } from "../../../inputs/UserSaveArticleWhereUniqueInput";
export declare class AggregateUserSaveArticleArgs {
    where?: UserSaveArticleWhereInput | undefined;
    orderBy?: UserSaveArticleOrderByInput[] | undefined;
    cursor?: UserSaveArticleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
