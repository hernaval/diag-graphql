import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { QuizUpdateOneRequiredWithoutDimensionsInput } from "../inputs/QuizUpdateOneRequiredWithoutDimensionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DimensionUpdateWithoutQuestionsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    Quiz?: QuizUpdateOneRequiredWithoutDimensionsInput | undefined;
}
