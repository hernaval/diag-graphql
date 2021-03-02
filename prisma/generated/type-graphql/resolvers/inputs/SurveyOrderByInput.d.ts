import { UserOrderByInput } from "../inputs/UserOrderByInput";
export declare class SurveyOrderByInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    createdDate?: "asc" | "desc" | undefined;
    updatedDate?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    User?: UserOrderByInput | undefined;
}
