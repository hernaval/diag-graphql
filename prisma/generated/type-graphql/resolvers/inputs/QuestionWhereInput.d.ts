import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DimensionRelationFilter } from "../inputs/DimensionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QuestionWhereInput {
    AND?: QuestionWhereInput[] | undefined;
    OR?: QuestionWhereInput[] | undefined;
    NOT?: QuestionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    sentence?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeFilter | undefined;
    dimensionId?: StringFilter | undefined;
    Dimension?: DimensionRelationFilter | undefined;
}
