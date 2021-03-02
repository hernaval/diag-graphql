import { FindFirstDimensionArgs } from "./args/FindFirstDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class FindFirstDimensionResolver {
    findFirstDimension(ctx: any, args: FindFirstDimensionArgs): Promise<Dimension | null>;
}
