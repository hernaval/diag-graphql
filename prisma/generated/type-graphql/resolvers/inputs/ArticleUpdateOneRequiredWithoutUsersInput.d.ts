import { ArticleCreateOrConnectWithoutUsersInput } from "../inputs/ArticleCreateOrConnectWithoutUsersInput";
import { ArticleCreateWithoutUsersInput } from "../inputs/ArticleCreateWithoutUsersInput";
import { ArticleUpdateWithoutUsersInput } from "../inputs/ArticleUpdateWithoutUsersInput";
import { ArticleUpsertWithoutUsersInput } from "../inputs/ArticleUpsertWithoutUsersInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";
export declare class ArticleUpdateOneRequiredWithoutUsersInput {
    create?: ArticleCreateWithoutUsersInput | undefined;
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | undefined;
    upsert?: ArticleUpsertWithoutUsersInput | undefined;
    connect?: ArticleWhereUniqueInput | undefined;
    update?: ArticleUpdateWithoutUsersInput | undefined;
}
