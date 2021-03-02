import { ArticleUpdateOneRequiredWithoutUsersInput } from "../inputs/ArticleUpdateOneRequiredWithoutUsersInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutArticlesInput } from "../inputs/UserUpdateOneRequiredWithoutArticlesInput";
export declare class UserSaveArticleUpdateInput {
    dateSaved?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutArticlesInput | undefined;
    Article?: ArticleUpdateOneRequiredWithoutUsersInput | undefined;
}
