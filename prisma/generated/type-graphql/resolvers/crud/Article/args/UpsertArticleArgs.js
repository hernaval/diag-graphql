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
exports.UpsertArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleCreateInput_1 = require("../../../inputs/ArticleCreateInput");
const ArticleUpdateInput_1 = require("../../../inputs/ArticleUpdateInput");
const ArticleWhereUniqueInput_1 = require("../../../inputs/ArticleWhereUniqueInput");
let UpsertArticleArgs = class UpsertArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereUniqueInput_1.ArticleWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleWhereUniqueInput_1.ArticleWhereUniqueInput)
], UpsertArticleArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateInput_1.ArticleCreateInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleCreateInput_1.ArticleCreateInput)
], UpsertArticleArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleUpdateInput_1.ArticleUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleUpdateInput_1.ArticleUpdateInput)
], UpsertArticleArgs.prototype, "update", void 0);
UpsertArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertArticleArgs);
exports.UpsertArticleArgs = UpsertArticleArgs;
