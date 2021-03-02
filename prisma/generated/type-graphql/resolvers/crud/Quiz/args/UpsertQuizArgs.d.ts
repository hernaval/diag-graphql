import { QuizCreateInput } from "../../../inputs/QuizCreateInput";
import { QuizUpdateInput } from "../../../inputs/QuizUpdateInput";
import { QuizWhereUniqueInput } from "../../../inputs/QuizWhereUniqueInput";
export declare class UpsertQuizArgs {
    where: QuizWhereUniqueInput;
    create: QuizCreateInput;
    update: QuizUpdateInput;
}
