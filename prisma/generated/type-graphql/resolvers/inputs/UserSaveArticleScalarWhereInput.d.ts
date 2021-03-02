import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class UserSaveArticleScalarWhereInput {
    AND?: UserSaveArticleScalarWhereInput[] | undefined;
    OR?: UserSaveArticleScalarWhereInput[] | undefined;
    NOT?: UserSaveArticleScalarWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    articleId?: StringFilter | undefined;
    dateSaved?: DateTimeNullableFilter | undefined;
}
