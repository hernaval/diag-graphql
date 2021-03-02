import { DimensionOrderByInput } from "../../../inputs/DimensionOrderByInput";
import { DimensionWhereInput } from "../../../inputs/DimensionWhereInput";
import { DimensionWhereUniqueInput } from "../../../inputs/DimensionWhereUniqueInput";
export declare class FindManyDimensionArgs {
    where?: DimensionWhereInput | undefined;
    orderBy?: DimensionOrderByInput[] | undefined;
    cursor?: DimensionWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "createdDate" | "updatedDate" | "quizId"> | undefined;
}
