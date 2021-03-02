import { UserCreateNestedOneWithoutSurveysInput } from "../inputs/UserCreateNestedOneWithoutSurveysInput";
export declare class SurveyCreateInput {
    id?: string | undefined;
    value: number;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    User: UserCreateNestedOneWithoutSurveysInput;
}
