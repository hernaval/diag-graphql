import { GraphQLResolveInfo } from "graphql";
import { AggregateArticleArgs } from "./args/AggregateArticleArgs";
import { AggregateArticle } from "../../outputs/AggregateArticle";
export declare class AggregateArticleResolver {
    aggregateArticle(ctx: any, info: GraphQLResolveInfo, args: AggregateArticleArgs): Promise<AggregateArticle>;
}
