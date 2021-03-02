import { QuizCountAggregate } from "../outputs/QuizCountAggregate";
import { QuizMaxAggregate } from "../outputs/QuizMaxAggregate";
import { QuizMinAggregate } from "../outputs/QuizMinAggregate";
export declare class AggregateQuiz {
    count: QuizCountAggregate | null;
    min: QuizMinAggregate | null;
    max: QuizMaxAggregate | null;
}
