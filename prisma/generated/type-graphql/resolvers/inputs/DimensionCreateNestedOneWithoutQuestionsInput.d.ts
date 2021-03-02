import { DimensionCreateOrConnectWithoutQuestionsInput } from "../inputs/DimensionCreateOrConnectWithoutQuestionsInput";
import { DimensionCreateWithoutQuestionsInput } from "../inputs/DimensionCreateWithoutQuestionsInput";
import { DimensionWhereUniqueInput } from "../inputs/DimensionWhereUniqueInput";
export declare class DimensionCreateNestedOneWithoutQuestionsInput {
    create?: DimensionCreateWithoutQuestionsInput | undefined;
    connectOrCreate?: DimensionCreateOrConnectWithoutQuestionsInput | undefined;
    connect?: DimensionWhereUniqueInput | undefined;
}
