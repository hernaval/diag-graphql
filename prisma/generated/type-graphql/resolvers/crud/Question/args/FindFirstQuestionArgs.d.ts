import { QuestionOrderByInput } from "../../../inputs/QuestionOrderByInput";
import { QuestionWhereInput } from "../../../inputs/QuestionWhereInput";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";
export declare class FindFirstQuestionArgs {
    where?: QuestionWhereInput | undefined;
    orderBy?: QuestionOrderByInput[] | undefined;
    cursor?: QuestionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "sentence" | "createdDate" | "updatedDate" | "dimensionId"> | undefined;
}
