import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserSaveArticleUpdateManyWithoutUserInput } from "../inputs/UserSaveArticleUpdateManyWithoutUserInput";
export declare class UserUpdateWithoutSurveysInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    emailConfirmed?: NullableBoolFieldUpdateOperationsInput | undefined;
    passwordHash?: StringFieldUpdateOperationsInput | undefined;
    username?: NullableStringFieldUpdateOperationsInput | undefined;
    firstName?: StringFieldUpdateOperationsInput | undefined;
    lastName?: StringFieldUpdateOperationsInput | undefined;
    gender?: StringFieldUpdateOperationsInput | undefined;
    function?: StringFieldUpdateOperationsInput | undefined;
    organisation?: StringFieldUpdateOperationsInput | undefined;
    category?: StringFieldUpdateOperationsInput | undefined;
    companySize?: StringFieldUpdateOperationsInput | undefined;
    activity?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    phone?: StringFieldUpdateOperationsInput | undefined;
    status?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: NullableStringFieldUpdateOperationsInput | undefined;
    forgotToken?: NullableStringFieldUpdateOperationsInput | undefined;
    createdDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    updatedDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    Articles?: UserSaveArticleUpdateManyWithoutUserInput | undefined;
}
