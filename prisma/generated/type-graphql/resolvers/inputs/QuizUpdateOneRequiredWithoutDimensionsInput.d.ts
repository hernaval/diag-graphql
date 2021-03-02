import { QuizCreateOrConnectWithoutDimensionsInput } from "../inputs/QuizCreateOrConnectWithoutDimensionsInput";
import { QuizCreateWithoutDimensionsInput } from "../inputs/QuizCreateWithoutDimensionsInput";
import { QuizUpdateWithoutDimensionsInput } from "../inputs/QuizUpdateWithoutDimensionsInput";
import { QuizUpsertWithoutDimensionsInput } from "../inputs/QuizUpsertWithoutDimensionsInput";
import { QuizWhereUniqueInput } from "../inputs/QuizWhereUniqueInput";
export declare class QuizUpdateOneRequiredWithoutDimensionsInput {
    create?: QuizCreateWithoutDimensionsInput | undefined;
    connectOrCreate?: QuizCreateOrConnectWithoutDimensionsInput | undefined;
    upsert?: QuizUpsertWithoutDimensionsInput | undefined;
    connect?: QuizWhereUniqueInput | undefined;
    update?: QuizUpdateWithoutDimensionsInput | undefined;
}
