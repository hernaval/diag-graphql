import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DimensionScalarWhereInput {
    AND?: DimensionScalarWhereInput[] | undefined;
    OR?: DimensionScalarWhereInput[] | undefined;
    NOT?: DimensionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeNullableFilter | undefined;
    quizId?: StringFilter | undefined;
}
