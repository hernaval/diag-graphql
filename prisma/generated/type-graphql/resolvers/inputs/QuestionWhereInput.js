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
var QuestionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const DimensionRelationFilter_1 = require("../inputs/DimensionRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let QuestionWhereInput = QuestionWhereInput_1 = class QuestionWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionWhereInput.prototype, "sentence", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], QuestionWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QuestionWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionWhereInput.prototype, "dimensionId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionRelationFilter_1.DimensionRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", DimensionRelationFilter_1.DimensionRelationFilter)
], QuestionWhereInput.prototype, "Dimension", void 0);
QuestionWhereInput = QuestionWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionWhereInput);
exports.QuestionWhereInput = QuestionWhereInput;
