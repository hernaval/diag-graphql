import { QuizCreateNestedOneWithoutDimensionsInput } from "../inputs/QuizCreateNestedOneWithoutDimensionsInput";
export declare class DimensionCreateWithoutQuestionsInput {
    id?: string | undefined;
    name: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Quiz: QuizCreateNestedOneWithoutDimensionsInput;
}
