import { QuizOrderByInput } from "../../../inputs/QuizOrderByInput";
import { QuizWhereInput } from "../../../inputs/QuizWhereInput";
import { QuizWhereUniqueInput } from "../../../inputs/QuizWhereUniqueInput";
export declare class FindFirstQuizArgs {
    where?: QuizWhereInput | undefined;
    orderBy?: QuizOrderByInput[] | undefined;
    cursor?: QuizWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "createdDate" | "updatedDate"> | undefined;
}
