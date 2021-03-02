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
var UserSaveArticleScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSaveArticleScalarWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let UserSaveArticleScalarWhereInput = UserSaveArticleScalarWhereInput_1 = class UserSaveArticleScalarWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleScalarWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleScalarWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserSaveArticleScalarWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserSaveArticleScalarWhereInput.prototype, "articleId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserSaveArticleScalarWhereInput.prototype, "dateSaved", void 0);
UserSaveArticleScalarWhereInput = UserSaveArticleScalarWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleScalarWhereInput);
exports.UserSaveArticleScalarWhereInput = UserSaveArticleScalarWhereInput;
