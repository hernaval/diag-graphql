import { QuestionCreateNestedManyWithoutDimensionInput } from "../inputs/QuestionCreateNestedManyWithoutDimensionInput";
import { QuizCreateNestedOneWithoutDimensionsInput } from "../inputs/QuizCreateNestedOneWithoutDimensionsInput";
export declare class DimensionCreateInput {
    id?: string | undefined;
    name: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Questions?: QuestionCreateNestedManyWithoutDimensionInput | undefined;
    Quiz: QuizCreateNestedOneWithoutDimensionsInput;
}
