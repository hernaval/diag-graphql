import { GraphQLResolveInfo } from "graphql";
import { AggregateSurveyArgs } from "./args/AggregateSurveyArgs";
import { AggregateSurvey } from "../../outputs/AggregateSurvey";
export declare class AggregateSurveyResolver {
    aggregateSurvey(ctx: any, info: GraphQLResolveInfo, args: AggregateSurveyArgs): Promise<AggregateSurvey>;
}
