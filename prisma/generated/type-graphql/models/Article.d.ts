import { UserSaveArticle } from "../models/UserSaveArticle";
export declare class Article {
    id: string;
    title: string;
    imageUrl: string;
    text: string;
    author: string;
    createdDate?: Date | null;
    updatedDate: Date;
    Users?: UserSaveArticle[];
}
