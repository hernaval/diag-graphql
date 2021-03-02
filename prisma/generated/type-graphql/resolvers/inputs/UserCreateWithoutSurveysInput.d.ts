import { UserSaveArticleCreateNestedManyWithoutUserInput } from "../inputs/UserSaveArticleCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSurveysInput {
    id?: string | undefined;
    email: string;
    emailConfirmed?: boolean | undefined;
    passwordHash: string;
    username?: string | undefined;
    firstName: string;
    lastName: string;
    gender: string;
    function: string;
    organisation: string;
    category: string;
    companySize: string;
    activity: string;
    country: string;
    phone: string;
    status?: string | undefined;
    role?: string | undefined;
    forgotToken?: string | undefined;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Articles?: UserSaveArticleCreateNestedManyWithoutUserInput | undefined;
}
