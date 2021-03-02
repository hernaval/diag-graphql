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
var QuestionScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let QuestionScalarWhereInput = QuestionScalarWhereInput_1 = class QuestionScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [QuestionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionScalarWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionScalarWhereInput.prototype, "sentence", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], QuestionScalarWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], QuestionScalarWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], QuestionScalarWhereInput.prototype, "dimensionId", void 0);
QuestionScalarWhereInput = QuestionScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionScalarWhereInput);
exports.QuestionScalarWhereInput = QuestionScalarWhereInput;
