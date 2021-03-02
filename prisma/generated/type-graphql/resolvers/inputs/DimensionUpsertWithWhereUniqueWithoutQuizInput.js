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
exports.DimensionUpsertWithWhereUniqueWithoutQuizInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateWithoutQuizInput_1 = require("../inputs/DimensionCreateWithoutQuizInput");
const DimensionUpdateWithoutQuizInput_1 = require("../inputs/DimensionUpdateWithoutQuizInput");
const DimensionWhereUniqueInput_1 = require("../inputs/DimensionWhereUniqueInput");
let DimensionUpsertWithWhereUniqueWithoutQuizInput = class DimensionUpsertWithWhereUniqueWithoutQuizInput {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereUniqueInput_1.DimensionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionWhereUniqueInput_1.DimensionWhereUniqueInput)
], DimensionUpsertWithWhereUniqueWithoutQuizInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionUpdateWithoutQuizInput_1.DimensionUpdateWithoutQuizInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionUpdateWithoutQuizInput_1.DimensionUpdateWithoutQuizInput)
], DimensionUpsertWithWhereUniqueWithoutQuizInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateWithoutQuizInput_1.DimensionCreateWithoutQuizInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionCreateWithoutQuizInput_1.DimensionCreateWithoutQuizInput)
], DimensionUpsertWithWhereUniqueWithoutQuizInput.prototype, "create", void 0);
DimensionUpsertWithWhereUniqueWithoutQuizInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionUpsertWithWhereUniqueWithoutQuizInput);
exports.DimensionUpsertWithWhereUniqueWithoutQuizInput = DimensionUpsertWithWhereUniqueWithoutQuizInput;
