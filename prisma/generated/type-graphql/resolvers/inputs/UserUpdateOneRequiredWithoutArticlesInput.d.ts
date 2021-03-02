import { UserCreateOrConnectWithoutArticlesInput } from "../inputs/UserCreateOrConnectWithoutArticlesInput";
import { UserCreateWithoutArticlesInput } from "../inputs/UserCreateWithoutArticlesInput";
import { UserUpdateWithoutArticlesInput } from "../inputs/UserUpdateWithoutArticlesInput";
import { UserUpsertWithoutArticlesInput } from "../inputs/UserUpsertWithoutArticlesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutArticlesInput {
    create?: UserCreateWithoutArticlesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput | undefined;
    upsert?: UserUpsertWithoutArticlesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutArticlesInput | undefined;
}
