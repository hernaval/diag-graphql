import { QuizOrderByInput } from "../inputs/QuizOrderByInput";
export declare class DimensionOrderByInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    createdDate?: "asc" | "desc" | undefined;
    updatedDate?: "asc" | "desc" | undefined;
    quizId?: "asc" | "desc" | undefined;
    Quiz?: QuizOrderByInput | undefined;
}
