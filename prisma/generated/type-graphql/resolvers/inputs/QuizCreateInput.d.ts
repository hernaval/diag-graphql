import { DimensionCreateNestedManyWithoutQuizInput } from "../inputs/DimensionCreateNestedManyWithoutQuizInput";
export declare class QuizCreateInput {
    id?: string | undefined;
    name: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Dimensions?: DimensionCreateNestedManyWithoutQuizInput | undefined;
}
