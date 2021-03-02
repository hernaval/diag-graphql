import { UserSaveArticleCreateOrConnectWithoutUserInput } from "../inputs/UserSaveArticleCreateOrConnectWithoutUserInput";
import { UserSaveArticleCreateWithoutUserInput } from "../inputs/UserSaveArticleCreateWithoutUserInput";
import { UserSaveArticleScalarWhereInput } from "../inputs/UserSaveArticleScalarWhereInput";
import { UserSaveArticleUpdateManyWithWhereWithoutUserInput } from "../inputs/UserSaveArticleUpdateManyWithWhereWithoutUserInput";
import { UserSaveArticleUpdateWithWhereUniqueWithoutUserInput } from "../inputs/UserSaveArticleUpdateWithWhereUniqueWithoutUserInput";
import { UserSaveArticleUpsertWithWhereUniqueWithoutUserInput } from "../inputs/UserSaveArticleUpsertWithWhereUniqueWithoutUserInput";
import { UserSaveArticleWhereUniqueInput } from "../inputs/UserSaveArticleWhereUniqueInput";
export declare class UserSaveArticleUpdateManyWithoutUserInput {
    create?: UserSaveArticleCreateWithoutUserInput[] | undefined;
    connectOrCreate?: UserSaveArticleCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: UserSaveArticleUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    connect?: UserSaveArticleWhereUniqueInput[] | undefined;
    set?: UserSaveArticleWhereUniqueInput[] | undefined;
    disconnect?: UserSaveArticleWhereUniqueInput[] | undefined;
    delete?: UserSaveArticleWhereUniqueInput[] | undefined;
    update?: UserSaveArticleUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: UserSaveArticleUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: UserSaveArticleScalarWhereInput[] | undefined;
}
