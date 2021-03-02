import { QuestionCreateOrConnectWithoutDimensionInput } from "../inputs/QuestionCreateOrConnectWithoutDimensionInput";
import { QuestionCreateWithoutDimensionInput } from "../inputs/QuestionCreateWithoutDimensionInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionCreateNestedManyWithoutDimensionInput {
    create?: QuestionCreateWithoutDimensionInput[] | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutDimensionInput[] | undefined;
    connect?: QuestionWhereUniqueInput[] | undefined;
}
