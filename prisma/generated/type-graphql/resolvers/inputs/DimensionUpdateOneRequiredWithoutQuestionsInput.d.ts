import { DimensionCreateOrConnectWithoutQuestionsInput } from "../inputs/DimensionCreateOrConnectWithoutQuestionsInput";
import { DimensionCreateWithoutQuestionsInput } from "../inputs/DimensionCreateWithoutQuestionsInput";
import { DimensionUpdateWithoutQuestionsInput } from "../inputs/DimensionUpdateWithoutQuestionsInput";
import { DimensionUpsertWithoutQuestionsInput } from "../inputs/DimensionUpsertWithoutQuestionsInput";
import { DimensionWhereUniqueInput } from "../inputs/DimensionWhereUniqueInput";
export declare class DimensionUpdateOneRequiredWithoutQuestionsInput {
    create?: DimensionCreateWithoutQuestionsInput | undefined;
    connectOrCreate?: DimensionCreateOrConnectWithoutQuestionsInput | undefined;
    upsert?: DimensionUpsertWithoutQuestionsInput | undefined;
    connect?: DimensionWhereUniqueInput | undefined;
    update?: DimensionUpdateWithoutQuestionsInput | undefined;
}
