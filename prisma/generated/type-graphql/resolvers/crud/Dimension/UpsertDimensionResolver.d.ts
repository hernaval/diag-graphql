import { UpsertDimensionArgs } from "./args/UpsertDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class UpsertDimensionResolver {
    upsertDimension(ctx: any, args: UpsertDimensionArgs): Promise<Dimension>;
}
