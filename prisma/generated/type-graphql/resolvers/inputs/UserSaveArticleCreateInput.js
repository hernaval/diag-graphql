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
exports.UserSaveArticleCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleCreateNestedOneWithoutUsersInput_1 = require("../inputs/ArticleCreateNestedOneWithoutUsersInput");
const UserCreateNestedOneWithoutArticlesInput_1 = require("../inputs/UserCreateNestedOneWithoutArticlesInput");
let UserSaveArticleCreateInput = class UserSaveArticleCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserSaveArticleCreateInput.prototype, "dateSaved", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutArticlesInput_1.UserCreateNestedOneWithoutArticlesInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutArticlesInput_1.UserCreateNestedOneWithoutArticlesInput)
], UserSaveArticleCreateInput.prototype, "User", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateNestedOneWithoutUsersInput_1.ArticleCreateNestedOneWithoutUsersInput, {
        nullable: false
    }),
    __metadata("design:type", ArticleCreateNestedOneWithoutUsersInput_1.ArticleCreateNestedOneWithoutUsersInput)
], UserSaveArticleCreateInput.prototype, "Article", void 0);
UserSaveArticleCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleCreateInput);
exports.UserSaveArticleCreateInput = UserSaveArticleCreateInput;
