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
var DimensionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DimensionScalarWhereInput = DimensionScalarWhereInput_1 = class DimensionScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DimensionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionScalarWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], DimensionScalarWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], DimensionScalarWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionScalarWhereInput.prototype, "quizId", void 0);
DimensionScalarWhereInput = DimensionScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionScalarWhereInput);
exports.DimensionScalarWhereInput = DimensionScalarWhereInput;
