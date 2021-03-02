import { CreateDimensionArgs } from "./args/CreateDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class CreateDimensionResolver {
    createDimension(ctx: any, args: CreateDimensionArgs): Promise<Dimension>;
}
