import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSurveysInput } from "../inputs/UserUpdateOneRequiredWithoutSurveysInput";
export declare class SurveyUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    value?: IntFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneRequiredWithoutSurveysInput | undefined;
}
