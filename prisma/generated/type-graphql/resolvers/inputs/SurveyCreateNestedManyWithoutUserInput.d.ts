import { SurveyCreateOrConnectWithoutUserInput } from "../inputs/SurveyCreateOrConnectWithoutUserInput";
import { SurveyCreateWithoutUserInput } from "../inputs/SurveyCreateWithoutUserInput";
import { SurveyWhereUniqueInput } from "../inputs/SurveyWhereUniqueInput";
export declare class SurveyCreateNestedManyWithoutUserInput {
    create?: SurveyCreateWithoutUserInput[] | undefined;
    connectOrCreate?: SurveyCreateOrConnectWithoutUserInput[] | undefined;
    connect?: SurveyWhereUniqueInput[] | undefined;
}
