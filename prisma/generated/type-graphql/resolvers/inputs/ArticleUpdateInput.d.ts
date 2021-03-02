import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserSaveArticleUpdateManyWithoutArticleInput } from "../inputs/UserSaveArticleUpdateManyWithoutArticleInput";
export declare class ArticleUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    imageUrl?: StringFieldUpdateOperationsInput | undefined;
    text?: StringFieldUpdateOperationsInput | undefined;
    author?: StringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    Users?: UserSaveArticleUpdateManyWithoutArticleInput | undefined;
}
