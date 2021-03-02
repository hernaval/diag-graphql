import { DimensionCreateNestedOneWithoutQuestionsInput } from "../inputs/DimensionCreateNestedOneWithoutQuestionsInput";
export declare class QuestionCreateInput {
    id?: string | undefined;
    sentence: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Dimension: DimensionCreateNestedOneWithoutQuestionsInput;
}
