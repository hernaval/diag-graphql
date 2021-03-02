import { UserSaveArticleCreateOrConnectWithoutArticleInput } from "../inputs/UserSaveArticleCreateOrConnectWithoutArticleInput";
import { UserSaveArticleCreateWithoutArticleInput } from "../inputs/UserSaveArticleCreateWithoutArticleInput";
import { UserSaveArticleWhereUniqueInput } from "../inputs/UserSaveArticleWhereUniqueInput";
export declare class UserSaveArticleCreateNestedManyWithoutArticleInput {
    create?: UserSaveArticleCreateWithoutArticleInput[] | undefined;
    connectOrCreate?: UserSaveArticleCreateOrConnectWithoutArticleInput[] | undefined;
    connect?: UserSaveArticleWhereUniqueInput[] | undefined;
}
