import { DimensionOrderByInput } from "../inputs/DimensionOrderByInput";
export declare class QuestionOrderByInput {
    id?: "asc" | "desc" | undefined;
    sentence?: "asc" | "desc" | undefined;
    createdDate?: "asc" | "desc" | undefined;
    updatedDate?: "asc" | "desc" | undefined;
    dimensionId?: "asc" | "desc" | undefined;
    Dimension?: DimensionOrderByInput | undefined;
}
