import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SurveyUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: IntFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
