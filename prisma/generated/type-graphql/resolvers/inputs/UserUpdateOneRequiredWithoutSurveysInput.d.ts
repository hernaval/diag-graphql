import { UserCreateOrConnectWithoutSurveysInput } from "../inputs/UserCreateOrConnectWithoutSurveysInput";
import { UserCreateWithoutSurveysInput } from "../inputs/UserCreateWithoutSurveysInput";
import { UserUpdateWithoutSurveysInput } from "../inputs/UserUpdateWithoutSurveysInput";
import { UserUpsertWithoutSurveysInput } from "../inputs/UserUpsertWithoutSurveysInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutSurveysInput {
    create?: UserCreateWithoutSurveysInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutSurveysInput | undefined;
    upsert?: UserUpsertWithoutSurveysInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutSurveysInput | undefined;
}
