import { SurveyCreateInput } from "../../../inputs/SurveyCreateInput";
import { SurveyUpdateInput } from "../../../inputs/SurveyUpdateInput";
import { SurveyWhereUniqueInput } from "../../../inputs/SurveyWhereUniqueInput";
export declare class UpsertSurveyArgs {
    where: SurveyWhereUniqueInput;
    create: SurveyCreateInput;
    update: SurveyUpdateInput;
}
