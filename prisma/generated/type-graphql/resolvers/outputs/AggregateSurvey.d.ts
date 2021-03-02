import { SurveyAvgAggregate } from "../outputs/SurveyAvgAggregate";
import { SurveyCountAggregate } from "../outputs/SurveyCountAggregate";
import { SurveyMaxAggregate } from "../outputs/SurveyMaxAggregate";
import { SurveyMinAggregate } from "../outputs/SurveyMinAggregate";
import { SurveySumAggregate } from "../outputs/SurveySumAggregate";
export declare class AggregateSurvey {
    count: SurveyCountAggregate | null;
    avg: SurveyAvgAggregate | null;
    sum: SurveySumAggregate | null;
    min: SurveyMinAggregate | null;
    max: SurveyMaxAggregate | null;
}
