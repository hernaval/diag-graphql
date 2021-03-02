import { QuestionCreateOrConnectWithoutDimensionInput } from "../inputs/QuestionCreateOrConnectWithoutDimensionInput";
import { QuestionCreateWithoutDimensionInput } from "../inputs/QuestionCreateWithoutDimensionInput";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyWithWhereWithoutDimensionInput } from "../inputs/QuestionUpdateManyWithWhereWithoutDimensionInput";
import { QuestionUpdateWithWhereUniqueWithoutDimensionInput } from "../inputs/QuestionUpdateWithWhereUniqueWithoutDimensionInput";
import { QuestionUpsertWithWhereUniqueWithoutDimensionInput } from "../inputs/QuestionUpsertWithWhereUniqueWithoutDimensionInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";
export declare class QuestionUpdateManyWithoutDimensionInput {
    create?: QuestionCreateWithoutDimensionInput[] | undefined;
    connectOrCreate?: QuestionCreateOrConnectWithoutDimensionInput[] | undefined;
    upsert?: QuestionUpsertWithWhereUniqueWithoutDimensionInput[] | undefined;
    connect?: QuestionWhereUniqueInput[] | undefined;
    set?: QuestionWhereUniqueInput[] | undefined;
    disconnect?: QuestionWhereUniqueInput[] | undefined;
    delete?: QuestionWhereUniqueInput[] | undefined;
    update?: QuestionUpdateWithWhereUniqueWithoutDimensionInput[] | undefined;
    updateMany?: QuestionUpdateManyWithWhereWithoutDimensionInput[] | undefined;
    deleteMany?: QuestionScalarWhereInput[] | undefined;
}
