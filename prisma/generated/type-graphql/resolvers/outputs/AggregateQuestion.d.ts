import { QuestionCountAggregate } from "../outputs/QuestionCountAggregate";
import { QuestionMaxAggregate } from "../outputs/QuestionMaxAggregate";
import { QuestionMinAggregate } from "../outputs/QuestionMinAggregate";
export declare class AggregateQuestion {
    count: QuestionCountAggregate | null;
    min: QuestionMinAggregate | null;
    max: QuestionMaxAggregate | null;
}
