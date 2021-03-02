import { GraphQLResolveInfo } from "graphql";
import { AggregateDimensionArgs } from "./args/AggregateDimensionArgs";
import { AggregateDimension } from "../../outputs/AggregateDimension";
export declare class AggregateDimensionResolver {
    aggregateDimension(ctx: any, info: GraphQLResolveInfo, args: AggregateDimensionArgs): Promise<AggregateDimension>;
}
