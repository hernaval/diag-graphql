import { GraphQLResolveInfo } from "graphql";
import { AggregateSurveyArgs } from "./args/AggregateSurveyArgs";
import { CreateSurveyArgs } from "./args/CreateSurveyArgs";
import { DeleteManySurveyArgs } from "./args/DeleteManySurveyArgs";
import { DeleteSurveyArgs } from "./args/DeleteSurveyArgs";
import { FindFirstSurveyArgs } from "./args/FindFirstSurveyArgs";
import { FindManySurveyArgs } from "./args/FindManySurveyArgs";
import { FindUniqueSurveyArgs } from "./args/FindUniqueSurveyArgs";
import { UpdateManySurveyArgs } from "./args/UpdateManySurveyArgs";
import { UpdateSurveyArgs } from "./args/UpdateSurveyArgs";
import { UpsertSurveyArgs } from "./args/UpsertSurveyArgs";
import { Survey } from "../../../models/Survey";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSurvey } from "../../outputs/AggregateSurvey";
export declare class SurveyCrudResolver {
    survey(ctx: any, args: FindUniqueSurveyArgs): Promise<Survey | null>;
    findFirstSurvey(ctx: any, args: FindFirstSurveyArgs): Promise<Survey | null>;
    surveys(ctx: any, args: FindManySurveyArgs): Promise<Survey[]>;
    createSurvey(ctx: any, args: CreateSurveyArgs): Promise<Survey>;
    deleteSurvey(ctx: any, args: DeleteSurveyArgs): Promise<Survey | null>;
    updateSurvey(ctx: any, args: UpdateSurveyArgs): Promise<Survey | null>;
    deleteManySurvey(ctx: any, args: DeleteManySurveyArgs): Promise<AffectedRowsOutput>;
    updateManySurvey(ctx: any, args: UpdateManySurveyArgs): Promise<AffectedRowsOutput>;
    upsertSurvey(ctx: any, args: UpsertSurveyArgs): Promise<Survey>;
    aggregateSurvey(ctx: any, info: GraphQLResolveInfo, args: AggregateSurveyArgs): Promise<AggregateSurvey>;
}
