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
exports.FindFirstArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleOrderByInput_1 = require("../../../inputs/ArticleOrderByInput");
const ArticleWhereInput_1 = require("../../../inputs/ArticleWhereInput");
const ArticleWhereUniqueInput_1 = require("../../../inputs/ArticleWhereUniqueInput");
const ArticleScalarFieldEnum_1 = require("../../../../enums/ArticleScalarFieldEnum");
let FindFirstArticleArgs = class FindFirstArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereInput_1.ArticleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleWhereInput_1.ArticleWhereInput)
], FindFirstArticleArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ArticleOrderByInput_1.ArticleOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstArticleArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereUniqueInput_1.ArticleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleWhereUniqueInput_1.ArticleWhereUniqueInput)
], FindFirstArticleArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstArticleArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstArticleArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [ArticleScalarFieldEnum_1.ArticleScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstArticleArgs.prototype, "distinct", void 0);
FindFirstArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstArticleArgs);
exports.FindFirstArticleArgs = FindFirstArticleArgs;
