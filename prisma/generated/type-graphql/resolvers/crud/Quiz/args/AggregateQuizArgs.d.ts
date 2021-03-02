import { QuizOrderByInput } from "../../../inputs/QuizOrderByInput";
import { QuizWhereInput } from "../../../inputs/QuizWhereInput";
import { QuizWhereUniqueInput } from "../../../inputs/QuizWhereUniqueInput";
export declare class AggregateQuizArgs {
    where?: QuizWhereInput | undefined;
    orderBy?: QuizOrderByInput[] | undefined;
    cursor?: QuizWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
