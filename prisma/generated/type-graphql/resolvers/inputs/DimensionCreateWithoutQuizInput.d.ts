import { QuestionCreateNestedManyWithoutDimensionInput } from "../inputs/QuestionCreateNestedManyWithoutDimensionInput";
export declare class DimensionCreateWithoutQuizInput {
    id?: string | undefined;
    name: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Questions?: QuestionCreateNestedManyWithoutDimensionInput | undefined;
}
