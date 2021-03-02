import { DimensionCreateOrConnectWithoutQuizInput } from "../inputs/DimensionCreateOrConnectWithoutQuizInput";
import { DimensionCreateWithoutQuizInput } from "../inputs/DimensionCreateWithoutQuizInput";
import { DimensionScalarWhereInput } from "../inputs/DimensionScalarWhereInput";
import { DimensionUpdateManyWithWhereWithoutQuizInput } from "../inputs/DimensionUpdateManyWithWhereWithoutQuizInput";
import { DimensionUpdateWithWhereUniqueWithoutQuizInput } from "../inputs/DimensionUpdateWithWhereUniqueWithoutQuizInput";
import { DimensionUpsertWithWhereUniqueWithoutQuizInput } from "../inputs/DimensionUpsertWithWhereUniqueWithoutQuizInput";
import { DimensionWhereUniqueInput } from "../inputs/DimensionWhereUniqueInput";
export declare class DimensionUpdateManyWithoutQuizInput {
    create?: DimensionCreateWithoutQuizInput[] | undefined;
    connectOrCreate?: DimensionCreateOrConnectWithoutQuizInput[] | undefined;
    upsert?: DimensionUpsertWithWhereUniqueWithoutQuizInput[] | undefined;
    connect?: DimensionWhereUniqueInput[] | undefined;
    set?: DimensionWhereUniqueInput[] | undefined;
    disconnect?: DimensionWhereUniqueInput[] | undefined;
    delete?: DimensionWhereUniqueInput[] | undefined;
    update?: DimensionUpdateWithWhereUniqueWithoutQuizInput[] | undefined;
    updateMany?: DimensionUpdateManyWithWhereWithoutQuizInput[] | undefined;
    deleteMany?: DimensionScalarWhereInput[] | undefined;
}
