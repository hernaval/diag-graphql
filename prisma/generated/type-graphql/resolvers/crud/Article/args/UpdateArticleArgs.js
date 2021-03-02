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
exports.UpdateArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleUpdateInput_1 = require("../../../inputs/ArticleUpdateInput");
const ArticleWhereUniqueInput_1 = require("../../../inputs/ArticleWhereUniqueInput");
let UpdateArticleArgs = class UpdateArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleUpdateInput_1.ArticleUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleUpdateInput_1.ArticleUpdateInput)
], UpdateArticleArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereUniqueInput_1.ArticleWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleWhereUniqueInput_1.ArticleWhereUniqueInput)
], UpdateArticleArgs.prototype, "where", void 0);
UpdateArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateArticleArgs);
exports.UpdateArticleArgs = UpdateArticleArgs;