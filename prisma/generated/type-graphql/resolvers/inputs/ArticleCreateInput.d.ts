import { UserSaveArticleCreateNestedManyWithoutArticleInput } from "../inputs/UserSaveArticleCreateNestedManyWithoutArticleInput";
export declare class ArticleCreateInput {
    id?: string | undefined;
    title: string;
    imageUrl: string;
    text: string;
    author: string;
    createdDate?: Date | undefined;
    updatedDate?: Date | undefined;
    Users?: UserSaveArticleCreateNestedManyWithoutArticleInput | undefined;
}
