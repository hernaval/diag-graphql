import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class SurveyWhereInput {
    AND?: SurveyWhereInput[] | undefined;
    OR?: SurveyWhereInput[] | undefined;
    NOT?: SurveyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: IntFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeNullableFilter | undefined;
    userId?: StringFilter | undefined;
    User?: UserRelationFilter | undefined;
}
