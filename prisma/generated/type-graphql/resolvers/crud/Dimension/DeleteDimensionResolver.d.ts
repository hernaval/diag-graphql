import { DeleteDimensionArgs } from "./args/DeleteDimensionArgs";
import { Dimension } from "../../../models/Dimension";
export declare class DeleteDimensionResolver {
    deleteDimension(ctx: any, args: DeleteDimensionArgs): Promise<Dimension | null>;
}
