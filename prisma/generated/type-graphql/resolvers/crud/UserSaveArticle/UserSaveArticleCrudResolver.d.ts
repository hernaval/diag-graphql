import { GraphQLResolveInfo } from "graphql";
import { AggregateUserSaveArticleArgs } from "./args/AggregateUserSaveArticleArgs";
import { CreateUserSaveArticleArgs } from "./args/CreateUserSaveArticleArgs";
import { DeleteManyUserSaveArticleArgs } from "./args/DeleteManyUserSaveArticleArgs";
import { DeleteUserSaveArticleArgs } from "./args/DeleteUserSaveArticleArgs";
import { FindFirstUserSaveArticleArgs } from "./args/FindFirstUserSaveArticleArgs";
import { FindManyUserSaveArticleArgs } from "./args/FindManyUserSaveArticleArgs";
import { FindUniqueUserSaveArticleArgs } from "./args/FindUniqueUserSaveArticleArgs";
import { UpdateManyUserSaveArticleArgs } from "./args/UpdateManyUserSaveArticleArgs";
import { UpdateUserSaveArticleArgs } from "./args/UpdateUserSaveArticleArgs";
import { UpsertUserSaveArticleArgs } from "./args/UpsertUserSaveArticleArgs";
import { UserSaveArticle } from "../../../models/UserSaveArticle";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateUserSaveArticle } from "../../outputs/AggregateUserSaveArticle";
export declare class UserSaveArticleCrudResolver {
    userSaveArticle(ctx: any, args: FindUniqueUserSaveArticleArgs): Promise<UserSaveArticle | null>;
    findFirstUserSaveArticle(ctx: any, args: FindFirstUserSaveArticleArgs): Promise<UserSaveArticle | null>;
    userSaveArticles(ctx: any, args: FindManyUserSaveArticleArgs): Promise<UserSaveArticle[]>;
    createUserSaveArticle(ctx: any, args: CreateUserSaveArticleArgs): Promise<UserSaveArticle>;
    deleteUserSaveArticle(ctx: any, args: DeleteUserSaveArticleArgs): Promise<UserSaveArticle | null>;
    updateUserSaveArticle(ctx: any, args: UpdateUserSaveArticleArgs): Promise<UserSaveArticle | null>;
    deleteManyUserSaveArticle(ctx: any, args: DeleteManyUserSaveArticleArgs): Promise<AffectedRowsOutput>;
    updateManyUserSaveArticle(ctx: any, args: UpdateManyUserSaveArticleArgs): Promise<AffectedRowsOutput>;
    upsertUserSaveArticle(ctx: any, args: UpsertUserSaveArticleArgs): Promise<UserSaveArticle>;
    aggregateUserSaveArticle(ctx: any, info: GraphQLResolveInfo, args: AggregateUserSaveArticleArgs): Promise<AggregateUserSaveArticle>;
}
