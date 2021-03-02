"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionUpdateManyWithoutQuizInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateOrConnectWithoutQuizInput_1 = require("../inputs/DimensionCreateOrConnectWithoutQuizInput");
const DimensionCreateWithoutQuizInput_1 = require("../inputs/DimensionCreateWithoutQuizInput");
const DimensionScalarWhereInput_1 = require("../inputs/DimensionScalarWhereInput");
const DimensionUpdateManyWithWhereWithoutQuizInput_1 = require("../inputs/DimensionUpdateManyWithWhereWithoutQuizInput");
const DimensionUpdateWithWhereUniqueWithoutQuizInput_1 = require("../inputs/DimensionUpdateWithWhereUniqueWithoutQuizInput");
const DimensionUpsertWithWhereUniqueWithoutQuizInput_1 = require("../inputs/DimensionUpsertWithWhereUniqueWithoutQuizInput");
const DimensionWhereUniqueInput_1 = require("../inputs/DimensionWhereUniqueInput");
let DimensionUpdateManyWithoutQuizInput = class DimensionUpdateManyWithoutQuizInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DimensionCreateWithoutQuizInput_1.DimensionCreateWithoutQuizInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionCreateOrConnectWithoutQuizInput_1.DimensionCreateOrConnectWithoutQuizInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionUpsertWithWhereUniqueWithoutQuizInput_1.DimensionUpsertWithWhereUniqueWithoutQuizInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereUniqueInput_1.DimensionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereUniqueInput_1.DimensionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereUniqueInput_1.DimensionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereUniqueInput_1.DimensionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionUpdateWithWhereUniqueWithoutQuizInput_1.DimensionUpdateWithWhereUniqueWithoutQuizInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionUpdateManyWithWhereWithoutQuizInput_1.DimensionUpdateManyWithWhereWithoutQuizInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionScalarWhereInput_1.DimensionScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionUpdateManyWithoutQuizInput.prototype, "deleteMany", void 0);
DimensionUpdateManyWithoutQuizInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionUpdateManyWithoutQuizInput);
exports.DimensionUpdateManyWithoutQuizInput = DimensionUpdateManyWithoutQuizInput;
