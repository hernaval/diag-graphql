import { GraphQLResolveInfo } from "graphql";
import { AggregateUserSaveArticleArgs } from "./args/AggregateUserSaveArticleArgs";
import { AggregateUserSaveArticle } from "../../outputs/AggregateUserSaveArticle";
export declare class AggregateUserSaveArticleResolver {
    aggregateUserSaveArticle(ctx: any, info: GraphQLResolveInfo, args: AggregateUserSaveArticleArgs): Promise<AggregateUserSaveArticle>;
}
