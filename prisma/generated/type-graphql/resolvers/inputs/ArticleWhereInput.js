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
var ArticleWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleWhereInput = void 0;
const TypeGraphQL = require("type-graphql");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const DateTimeNullableFilter_1 = require("../inputs/DateTimeNullableFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserSaveArticleListRelationFilter_1 = require("../inputs/UserSaveArticleListRelationFilter");
let ArticleWhereInput = ArticleWhereInput_1 = class ArticleWhereInput {
};
__decorate([
    TypeGraphQL.Field(_type => [ArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ArticleWhereInput.prototype, "AND", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ArticleWhereInput.prototype, "OR", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ArticleWhereInput_1], {
        nullable: true
    }),
    __metadata("design:type", Array)
], ArticleWhereInput.prototype, "NOT", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ArticleWhereInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ArticleWhereInput.prototype, "title", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ArticleWhereInput.prototype, "imageUrl", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ArticleWhereInput.prototype, "text", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    __metadata("design:type", StringFilter_1.StringFilter)
], ArticleWhereInput.prototype, "author", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeNullableFilter_1.DateTimeNullableFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeNullableFilter_1.DateTimeNullableFilter)
], ArticleWhereInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    __metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ArticleWhereInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleListRelationFilter_1.UserSaveArticleListRelationFilter, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleListRelationFilter_1.UserSaveArticleListRelationFilter)
], ArticleWhereInput.prototype, "Users", void 0);
ArticleWhereInput = ArticleWhereInput_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ArticleWhereInput);
exports.ArticleWhereInput = ArticleWhereInput;
