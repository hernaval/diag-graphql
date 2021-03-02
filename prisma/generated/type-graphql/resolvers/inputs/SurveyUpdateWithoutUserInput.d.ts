import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SurveyUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: IntFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
