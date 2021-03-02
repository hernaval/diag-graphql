import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DimensionUpdateOneRequiredWithoutQuestionsInput } from "../inputs/DimensionUpdateOneRequiredWithoutQuestionsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuestionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    sentence?: StringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    Dimension?: DimensionUpdateOneRequiredWithoutQuestionsInput | undefined;
}
