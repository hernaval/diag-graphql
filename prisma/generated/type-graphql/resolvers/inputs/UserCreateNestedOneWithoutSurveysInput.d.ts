import { UserCreateOrConnectWithoutSurveysInput } from "../inputs/UserCreateOrConnectWithoutSurveysInput";
import { UserCreateWithoutSurveysInput } from "../inputs/UserCreateWithoutSurveysInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutSurveysInput {
    create?: UserCreateWithoutSurveysInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
