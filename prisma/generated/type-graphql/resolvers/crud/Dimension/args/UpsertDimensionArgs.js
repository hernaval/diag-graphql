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
exports.UpsertDimensionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateInput_1 = require("../../../inputs/DimensionCreateInput");
const DimensionUpdateInput_1 = require("../../../inputs/DimensionUpdateInput");
const DimensionWhereUniqueInput_1 = require("../../../inputs/DimensionWhereUniqueInput");
let UpsertDimensionArgs = class UpsertDimensionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereUniqueInput_1.DimensionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionWhereUniqueInput_1.DimensionWhereUniqueInput)
], UpsertDimensionArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateInput_1.DimensionCreateInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionCreateInput_1.DimensionCreateInput)
], UpsertDimensionArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionUpdateInput_1.DimensionUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionUpdateInput_1.DimensionUpdateInput)
], UpsertDimensionArgs.prototype, "update", void 0);
UpsertDimensionArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertDimensionArgs);
exports.UpsertDimensionArgs = UpsertDimensionArgs;
