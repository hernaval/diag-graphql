import { ArticleOrderByInput } from "../inputs/ArticleOrderByInput";
import { UserOrderByInput } from "../inputs/UserOrderByInput";
export declare class UserSaveArticleOrderByInput {
    userId?: "asc" | "desc" | undefined;
    User?: UserOrderByInput | undefined;
    articleId?: "asc" | "desc" | undefined;
    Article?: ArticleOrderByInput | undefined;
    dateSaved?: "asc" | "desc" | undefined;
}
