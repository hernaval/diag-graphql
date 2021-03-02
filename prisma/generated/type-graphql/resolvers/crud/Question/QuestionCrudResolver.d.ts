import { GraphQLResolveInfo } from "graphql";
import { AggregateQuestionArgs } from "./args/AggregateQuestionArgs";
import { CreateQuestionArgs } from "./args/CreateQuestionArgs";
import { DeleteManyQuestionArgs } from "./args/DeleteManyQuestionArgs";
import { DeleteQuestionArgs } from "./args/DeleteQuestionArgs";
import { FindFirstQuestionArgs } from "./args/FindFirstQuestionArgs";
import { FindManyQuestionArgs } from "./args/FindManyQuestionArgs";
import { FindUniqueQuestionArgs } from "./args/FindUniqueQuestionArgs";
import { UpdateManyQuestionArgs } from "./args/UpdateManyQuestionArgs";
import { UpdateQuestionArgs } from "./args/UpdateQuestionArgs";
import { UpsertQuestionArgs } from "./args/UpsertQuestionArgs";
import { Question } from "../../../models/Question";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateQuestion } from "../../outputs/AggregateQuestion";
export declare class QuestionCrudResolver {
    question(ctx: any, args: FindUniqueQuestionArgs): Promise<Question | null>;
    findFirstQuestion(ctx: any, args: FindFirstQuestionArgs): Promise<Question | null>;
    questions(ctx: any, args: FindManyQuestionArgs): Promise<Question[]>;
    createQuestion(ctx: any, args: CreateQuestionArgs): Promise<Question>;
    deleteQuestion(ctx: any, args: DeleteQuestionArgs): Promise<Question | null>;
    updateQuestion(ctx: any, args: UpdateQuestionArgs): Promise<Question | null>;
    deleteManyQuestion(ctx: any, args: DeleteManyQuestionArgs): Promise<AffectedRowsOutput>;
    updateManyQuestion(ctx: any, args: UpdateManyQuestionArgs): Promise<AffectedRowsOutput>;
    upsertQuestion(ctx: any, args: UpsertQuestionArgs): Promise<Question>;
    aggregateQuestion(ctx: any, info: GraphQLResolveInfo, args: AggregateQuestionArgs): Promise<AggregateQuestion>;
}
