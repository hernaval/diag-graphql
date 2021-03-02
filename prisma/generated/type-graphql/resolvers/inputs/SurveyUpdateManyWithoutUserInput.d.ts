import { SurveyCreateOrConnectWithoutUserInput } from "../inputs/SurveyCreateOrConnectWithoutUserInput";
import { SurveyCreateWithoutUserInput } from "../inputs/SurveyCreateWithoutUserInput";
import { SurveyScalarWhereInput } from "../inputs/SurveyScalarWhereInput";
import { SurveyUpdateManyWithWhereWithoutUserInput } from "../inputs/SurveyUpdateManyWithWhereWithoutUserInput";
import { SurveyUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SurveyUpdateWithWhereUniqueWithoutUserInput";
import { SurveyUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SurveyUpsertWithWhereUniqueWithoutUserInput";
import { SurveyWhereUniqueInput } from "../inputs/SurveyWhereUniqueInput";
export declare class SurveyUpdateManyWithoutUserInput {
    create?: SurveyCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: SurveyUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    connect?: SurveyWhereUniqueInput[] | undefined;
    set?: SurveyWhereUniqueInput[] | undefined;
    disconnect?: SurveyWhereUniqueInput[] | undefined;
    delete?: SurveyWhereUniqueInput[] | undefined;
    update?: SurveyUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: SurveyUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: SurveyScalarWhereInput[] | undefined;
}
