import { GraphQLResolveInfo } from "graphql";
import { AggregateQuizArgs } from "./args/AggregateQuizArgs";
import { AggregateQuiz } from "../../outputs/AggregateQuiz";
export declare class AggregateQuizResolver {
    aggregateQuiz(ctx: any, info: GraphQLResolveInfo, args: AggregateQuizArgs): Promise<AggregateQuiz>;
}
