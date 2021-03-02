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
var SurveyWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let SurveyWhereInput = SurveyWhereInput_1 = class SurveyWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SurveyWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    __metadata("design:type", IntFilter_1.IntFilter)
], SurveyWhereInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SurveyWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], SurveyWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], SurveyWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], SurveyWhereInput.prototype, "User", void 0);
SurveyWhereInput = SurveyWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SurveyWhereInput);
exports.SurveyWhereInput = SurveyWhereInput;
