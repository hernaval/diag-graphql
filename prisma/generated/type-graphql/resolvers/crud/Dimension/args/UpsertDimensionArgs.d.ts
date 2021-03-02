import { DimensionCreateInput } from "../../../inputs/DimensionCreateInput";
import { DimensionUpdateInput } from "../../../inputs/DimensionUpdateInput";
import { DimensionWhereUniqueInput } from "../../../inputs/DimensionWhereUniqueInput";
export declare class UpsertDimensionArgs {
    where: DimensionWhereUniqueInput;
    create: DimensionCreateInput;
    update: DimensionUpdateInput;
}
