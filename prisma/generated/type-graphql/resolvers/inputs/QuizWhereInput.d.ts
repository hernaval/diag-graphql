import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DimensionListRelationFilter } from "../inputs/DimensionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QuizWhereInput {
    AND?: QuizWhereInput[] | undefined;
    OR?: QuizWhereInput[] | undefined;
    NOT?: QuizWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeNullableFilter | undefined;
    Dimensions?: DimensionListRelationFilter | undefined;
}
