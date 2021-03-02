import { ArticleRelationFilter } from "../inputs/ArticleRelationFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class UserSaveArticleWhereInput {
    AND?: UserSaveArticleWhereInput[] | undefined;
    OR?: UserSaveArticleWhereInput[] | undefined;
    NOT?: UserSaveArticleWhereInput[] | undefined;
    userId?: StringFilter | undefined;
    User?: UserRelationFilter | undefined;
    articleId?: StringFilter | undefined;
    Article?: ArticleRelationFilter | undefined;
    dateSaved?: DateTimeNullableFilter | undefined;
}
