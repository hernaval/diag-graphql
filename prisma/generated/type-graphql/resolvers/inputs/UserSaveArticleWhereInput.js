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
var UserSaveArticleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSaveArticleWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleRelationFilter_1 = require("../inputs/ArticleRelationFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let UserSaveArticleWhereInput = UserSaveArticleWhereInput_1 = class UserSaveArticleWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserSaveArticleWhereInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], UserSaveArticleWhereInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], UserSaveArticleWhereInput.prototype, "articleId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleRelationFilter_1.ArticleRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", ArticleRelationFilter_1.ArticleRelationFilter)
], UserSaveArticleWhereInput.prototype, "Article", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], UserSaveArticleWhereInput.prototype, "dateSaved", void 0);
UserSaveArticleWhereInput = UserSaveArticleWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleWhereInput);
exports.UserSaveArticleWhereInput = UserSaveArticleWhereInput;
