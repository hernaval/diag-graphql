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
exports.UserSaveArticleOrderByInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleOrderByInput_1 = require("../inputs/ArticleOrderByInput");
const UserOrderByInput_1 = require("../inputs/UserOrderByInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserSaveArticleOrderByInput = class UserSaveArticleOrderByInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserSaveArticleOrderByInput.prototype, "userId", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserOrderByInput_1.UserOrderByInput, {
        nullable: true
    }),
    __metadata("design:type", UserOrderByInput_1.UserOrderByInput)
], UserSaveArticleOrderByInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserSaveArticleOrderByInput.prototype, "articleId", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleOrderByInput_1.ArticleOrderByInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleOrderByInput_1.ArticleOrderByInput)
], UserSaveArticleOrderByInput.prototype, "Article", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserSaveArticleOrderByInput.prototype, "dateSaved", void 0);
UserSaveArticleOrderByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleOrderByInput);
exports.UserSaveArticleOrderByInput = UserSaveArticleOrderByInput;
