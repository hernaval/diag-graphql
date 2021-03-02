import { ArticleCreateOrConnectWithoutUsersInput } from "../inputs/ArticleCreateOrConnectWithoutUsersInput";
import { ArticleCreateWithoutUsersInput } from "../inputs/ArticleCreateWithoutUsersInput";
import { ArticleWhereUniqueInput } from "../inputs/ArticleWhereUniqueInput";
export declare class ArticleCreateNestedOneWithoutUsersInput {
    create?: ArticleCreateWithoutUsersInput | undefined;
    connectOrCreate?: ArticleCreateOrConnectWithoutUsersInput | undefined;
    connect?: ArticleWhereUniqueInput | undefined;
}
