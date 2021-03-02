import { GraphQLResolveInfo } from "graphql";
import { AggregateArticleArgs } from "./args/AggregateArticleArgs";
import { CreateArticleArgs } from "./args/CreateArticleArgs";
import { DeleteArticleArgs } from "./args/DeleteArticleArgs";
import { DeleteManyArticleArgs } from "./args/DeleteManyArticleArgs";
import { FindFirstArticleArgs } from "./args/FindFirstArticleArgs";
import { FindManyArticleArgs } from "./args/FindManyArticleArgs";
import { FindUniqueArticleArgs } from "./args/FindUniqueArticleArgs";
import { UpdateArticleArgs } from "./args/UpdateArticleArgs";
import { UpdateManyArticleArgs } from "./args/UpdateManyArticleArgs";
import { UpsertArticleArgs } from "./args/UpsertArticleArgs";
import { Article } from "../../../models/Article";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateArticle } from "../../outputs/AggregateArticle";
export declare class ArticleCrudResolver {
    article(ctx: any, args: FindUniqueArticleArgs): Promise<Article | null>;
    findFirstArticle(ctx: any, args: FindFirstArticleArgs): Promise<Article | null>;
    articles(ctx: any, args: FindManyArticleArgs): Promise<Article[]>;
    createArticle(ctx: any, args: CreateArticleArgs): Promise<Article>;
    deleteArticle(ctx: any, args: DeleteArticleArgs): Promise<Article | null>;
    updateArticle(ctx: any, args: UpdateArticleArgs): Promise<Article | null>;
    deleteManyArticle(ctx: any, args: DeleteManyArticleArgs): Promise<AffectedRowsOutput>;
    updateManyArticle(ctx: any, args: UpdateManyArticleArgs): Promise<AffectedRowsOutput>;
    upsertArticle(ctx: any, args: UpsertArticleArgs): Promise<Article>;
    aggregateArticle(ctx: any, info: GraphQLResolveInfo, args: AggregateArticleArgs): Promise<AggregateArticle>;
}
