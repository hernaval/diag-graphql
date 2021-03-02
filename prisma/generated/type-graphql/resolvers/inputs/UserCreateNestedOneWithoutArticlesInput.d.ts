import { UserCreateOrConnectWithoutArticlesInput } from "../inputs/UserCreateOrConnectWithoutArticlesInput";
import { UserCreateWithoutArticlesInput } from "../inputs/UserCreateWithoutArticlesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutArticlesInput {
    create?: UserCreateWithoutArticlesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
