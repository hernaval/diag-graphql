import { UserSaveArticleCreateOrConnectWithoutUserInput } from "../inputs/UserSaveArticleCreateOrConnectWithoutUserInput";
import { UserSaveArticleCreateWithoutUserInput } from "../inputs/UserSaveArticleCreateWithoutUserInput";
import { UserSaveArticleWhereUniqueInput } from "../inputs/UserSaveArticleWhereUniqueInput";
export declare class UserSaveArticleCreateNestedManyWithoutUserInput {
    create?: UserSaveArticleCreateWithoutUserInput[] | undefined;
    connectOrCreate?: UserSaveArticleCreateOrConnectWithoutUserInput[] | undefined;
    connect?: UserSaveArticleWhereUniqueInput[] | undefined;
}
