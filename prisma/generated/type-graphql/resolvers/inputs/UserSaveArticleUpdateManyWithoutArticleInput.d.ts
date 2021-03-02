import { UserSaveArticleCreateOrConnectWithoutArticleInput } from "../inputs/UserSaveArticleCreateOrConnectWithoutArticleInput";
import { UserSaveArticleCreateWithoutArticleInput } from "../inputs/UserSaveArticleCreateWithoutArticleInput";
import { UserSaveArticleScalarWhereInput } from "../inputs/UserSaveArticleScalarWhereInput";
import { UserSaveArticleUpdateManyWithWhereWithoutArticleInput } from "../inputs/UserSaveArticleUpdateManyWithWhereWithoutArticleInput";
import { UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput } from "../inputs/UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput";
import { UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput } from "../inputs/UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput";
import { UserSaveArticleWhereUniqueInput } from "../inputs/UserSaveArticleWhereUniqueInput";
export declare class UserSaveArticleUpdateManyWithoutArticleInput {
    create?: UserSaveArticleCreateWithoutArticleInput[] | undefined;
    connectOrCreate?: UserSaveArticleCreateOrConnectWithoutArticleInput[] | undefined;
    upsert?: UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput[] | undefined;
    connect?: UserSaveArticleWhereUniqueInput[] | undefined;
    set?: UserSaveArticleWhereUniqueInput[] | undefined;
    disconnect?: UserSaveArticleWhereUniqueInput[] | undefined;
    delete?: UserSaveArticleWhereUniqueInput[] | undefined;
    update?: UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput[] | undefined;
    updateMany?: UserSaveArticleUpdateManyWithWhereWithoutArticleInput[] | undefined;
    deleteMany?: UserSaveArticleScalarWhereInput[] | undefined;
}
