import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class SurveyScalarWhereInput {
    AND?: SurveyScalarWhereInput[] | undefined;
    OR?: SurveyScalarWhereInput[] | undefined;
    NOT?: SurveyScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: IntFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeNullableFilter | undefined;
    userId?: StringFilter | undefined;
}
