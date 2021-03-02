import { FindManyDimensionArgs } from "./args/FindManyDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class FindManyDimensionResolver {
    dimensions(ctx: any, args: FindManyDimensionArgs): Promise<Dimension[]>;
}
