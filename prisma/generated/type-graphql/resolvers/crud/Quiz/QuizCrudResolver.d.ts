import { GraphQLResolveInfo } from "graphql";
import { AggregateQuizArgs } from "./args/AggregateQuizArgs";
import { CreateQuizArgs } from "./args/CreateQuizArgs";
import { DeleteManyQuizArgs } from "./args/DeleteManyQuizArgs";
import { DeleteQuizArgs } from "./args/DeleteQuizArgs";
import { FindFirstQuizArgs } from "./args/FindFirstQuizArgs";
import { FindManyQuizArgs } from "./args/FindManyQuizArgs";
import { FindUniqueQuizArgs } from "./args/FindUniqueQuizArgs";
import { UpdateManyQuizArgs } from "./args/UpdateManyQuizArgs";
import { UpdateQuizArgs } from "./args/UpdateQuizArgs";
import { UpsertQuizArgs } from "./args/UpsertQuizArgs";
import { Quiz } from "../../../models/Quiz";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateQuiz } from "../../outputs/AggregateQuiz";
export declare class QuizCrudResolver {
    quiz(ctx: any, args: FindUniqueQuizArgs): Promise<Quiz | null>;
    findFirstQuiz(ctx: any, args: FindFirstQuizArgs): Promise<Quiz | null>;
    quizzes(ctx: any, args: FindManyQuizArgs): Promise<Quiz[]>;
    createQuiz(ctx: any, args: CreateQuizArgs): Promise<Quiz>;
    deleteQuiz(ctx: any, args: DeleteQuizArgs): Promise<Quiz | null>;
    updateQuiz(ctx: any, args: UpdateQuizArgs): Promise<Quiz | null>;
    deleteManyQuiz(ctx: any, args: DeleteManyQuizArgs): Promise<AffectedRowsOutput>;
    updateManyQuiz(ctx: any, args: UpdateManyQuizArgs): Promise<AffectedRowsOutput>;
    upsertQuiz(ctx: any, args: UpsertQuizArgs): Promise<Quiz>;
    aggregateQuiz(ctx: any, info: GraphQLResolveInfo, args: AggregateQuizArgs): Promise<AggregateQuiz>;
}
