import { DimensionCountAggregate } from "../outputs/DimensionCountAggregate";
import { DimensionMaxAggregate } from "../outputs/DimensionMaxAggregate";
import { DimensionMinAggregate } from "../outputs/DimensionMinAggregate";
export declare class AggregateDimension {
    count: DimensionCountAggregate | null;
    min: DimensionMinAggregate | null;
    max: DimensionMaxAggregate | null;
}
