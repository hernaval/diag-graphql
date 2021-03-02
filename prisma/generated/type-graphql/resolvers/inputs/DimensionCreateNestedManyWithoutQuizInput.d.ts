import { DimensionCreateOrConnectWithoutQuizInput } from "../inputs/DimensionCreateOrConnectWithoutQuizInput";
import { DimensionCreateWithoutQuizInput } from "../inputs/DimensionCreateWithoutQuizInput";
import { DimensionWhereUniqueInput } from "../inputs/DimensionWhereUniqueInput";
export declare class DimensionCreateNestedManyWithoutQuizInput {
    create?: DimensionCreateWithoutQuizInput[] | undefined;
    connectOrCreate?: DimensionCreateOrConnectWithoutQuizInput[] | undefined;
    connect?: DimensionWhereUniqueInput[] | undefined;
}
