import { QuizCreateOrConnectWithoutDimensionsInput } from "../inputs/QuizCreateOrConnectWithoutDimensionsInput";
import { QuizCreateWithoutDimensionsInput } from "../inputs/QuizCreateWithoutDimensionsInput";
import { QuizWhereUniqueInput } from "../inputs/QuizWhereUniqueInput";
export declare class QuizCreateNestedOneWithoutDimensionsInput {
    create?: QuizCreateWithoutDimensionsInput | undefined;
    connectOrCreate?: QuizCreateOrConnectWithoutDimensionsInput | undefined;
    connect?: QuizWhereUniqueInput | undefined;
}
