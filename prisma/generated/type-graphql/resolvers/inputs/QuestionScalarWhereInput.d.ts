import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class QuestionScalarWhereInput {
    AND?: QuestionScalarWhereInput[] | undefined;
    OR?: QuestionScalarWhereInput[] | undefined;
    NOT?: QuestionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    sentence?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeFilter | undefined;
    dimensionId?: StringFilter | undefined;
}
