import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class QuizUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
}
