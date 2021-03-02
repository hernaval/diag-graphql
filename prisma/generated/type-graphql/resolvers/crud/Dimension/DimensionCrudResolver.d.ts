import { GraphQLResolveInfo } from "graphql";
import { AggregateDimensionArgs } from "./args/AggregateDimensionArgs";
import { CreateDimensionArgs } from "./args/CreateDimensionArgs";
import { DeleteDimensionArgs } from "./args/DeleteDimensionArgs";
import { DeleteManyDimensionArgs } from "./args/DeleteManyDimensionArgs";
import { FindFirstDimensionArgs } from "./args/FindFirstDimensionArgs";
import { FindManyDimensionArgs } from "./args/FindManyDimensionArgs";
import { FindUniqueDimensionArgs } from "./args/FindUniqueDimensionArgs";
import { UpdateDimensionArgs } from "./args/UpdateDimensionArgs";
import { UpdateManyDimensionArgs } from "./args/UpdateManyDimensionArgs";
import { UpsertDimensionArgs } from "./args/UpsertDimensionArgs";
import { Dimension } from "../../../models/Dimension";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDimension } from "../../outputs/AggregateDimension";
export declare class DimensionCrudResolver {
    dimension(ctx: any, args: FindUniqueDimensionArgs): Promise<Dimension | null>;
    findFirstDimension(ctx: any, args: FindFirstDimensionArgs): Promise<Dimension | null>;
    dimensions(ctx: any, args: FindManyDimensionArgs): Promise<Dimension[]>;
    createDimension(ctx: any, args: CreateDimensionArgs): Promise<Dimension>;
    deleteDimension(ctx: any, args: DeleteDimensionArgs): Promise<Dimension | null>;
    updateDimension(ctx: any, args: UpdateDimensionArgs): Promise<Dimension | null>;
    deleteManyDimension(ctx: any, args: DeleteManyDimensionArgs): Promise<AffectedRowsOutput>;
    updateManyDimension(ctx: any, args: UpdateManyDimensionArgs): Promise<AffectedRowsOutput>;
    upsertDimension(ctx: any, args: UpsertDimensionArgs): Promise<Dimension>;
    aggregateDimension(ctx: any, info: GraphQLResolveInfo, args: AggregateDimensionArgs): Promise<AggregateDimension>;
}
