import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserSaveArticleListRelationFilter } from "../inputs/UserSaveArticleListRelationFilter";
export declare class ArticleWhereInput {
    AND?: ArticleWhereInput[] | undefined;
    OR?: ArticleWhereInput[] | undefined;
    NOT?: ArticleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    imageUrl?: StringFilter | undefined;
    text?: StringFilter | undefined;
    author?: StringFilter | undefined;
    createdDate?: DateTimeNullableFilter | undefined;
    updatedDate?: DateTimeFilter | undefined;
    Users?: UserSaveArticleListRelationFilter | undefined;
}
