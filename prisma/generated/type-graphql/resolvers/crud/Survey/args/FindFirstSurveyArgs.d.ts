import { SurveyOrderByInput } from "../../../inputs/SurveyOrderByInput";
import { SurveyWhereInput } from "../../../inputs/SurveyWhereInput";
import { SurveyWhereUniqueInput } from "../../../inputs/SurveyWhereUniqueInput";
export declare class FindFirstSurveyArgs {
    where?: SurveyWhereInput | undefined;
    orderBy?: SurveyOrderByInput[] | undefined;
    cursor?: SurveyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "value" | "createdDate" | "updatedDate" | "userId"> | undefined;
}
