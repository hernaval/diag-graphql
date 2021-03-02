import { Article } from "../models/Article";
import { User } from "../models/User";
export declare class UserSaveArticle {
    userId: string;
    User?: User;
    articleId: string;
    Article?: Article;
    dateSaved?: Date | null;
}
