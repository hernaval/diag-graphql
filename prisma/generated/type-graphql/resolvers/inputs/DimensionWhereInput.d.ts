import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { QuestionListRelationFilter } from "../inputs/QuestionListRelationFilter";
import { QuizRelationFilter } from "../inputs/QuizRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DimensionWhereInput {
    AND?: DimensionWhereInput[] | undefined;
    OR?: DimensionWhereInput[] | undefined;
    NOT?: DimensionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeNullableFilter | undefined;
    Questions?: QuestionListRelationFilter | undefined;
    quizId?: StringFilter | undefined;
    Quiz?: QuizRelationFilter | undefined;
}
