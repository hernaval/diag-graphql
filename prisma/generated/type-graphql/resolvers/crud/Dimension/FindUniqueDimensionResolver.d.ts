import { FindUniqueDimensionArgs } from "./args/FindUniqueDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class FindUniqueDimensionResolver {
    dimension(ctx: any, args: FindUniqueDimensionArgs): Promise<Dimension | null>;
}
