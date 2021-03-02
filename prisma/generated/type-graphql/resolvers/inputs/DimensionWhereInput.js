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
var DimensionWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const QuestionListRelationFilter_1 = require("../inputs/QuestionListRelationFilter");
const QuizRelationFilter_1 = require("../inputs/QuizRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let DimensionWhereInput = DimensionWhereInput_1 = class DimensionWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], DimensionWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionWhereInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], DimensionWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], DimensionWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionListRelationFilter_1.QuestionListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", QuestionListRelationFilter_1.QuestionListRelationFilter)
], DimensionWhereInput.prototype, "Questions", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], DimensionWhereInput.prototype, "quizId", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizRelationFilter_1.QuizRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", QuizRelationFilter_1.QuizRelationFilter)
], DimensionWhereInput.prototype, "Quiz", void 0);
DimensionWhereInput = DimensionWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionWhereInput);
exports.DimensionWhereInput = DimensionWhereInput;
