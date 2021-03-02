import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { QuestionUpdateManyWithoutDimensionInput } from "../inputs/QuestionUpdateManyWithoutDimensionInput";
import { QuizUpdateOneRequiredWithoutDimensionsInput } from "../inputs/QuizUpdateOneRequiredWithoutDimensionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class DimensionUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    Questions?: QuestionUpdateManyWithoutDimensionInput | undefined;
    Quiz?: QuizUpdateOneRequiredWithoutDimensionsInput | undefined;
}
