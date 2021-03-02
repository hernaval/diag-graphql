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
exports.UpdateManyUserSaveArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleUpdateManyMutationInput_1 = require("../../../inputs/UserSaveArticleUpdateManyMutationInput");
const UserSaveArticleWhereInput_1 = require("../../../inputs/UserSaveArticleWhereInput");
let UpdateManyUserSaveArticleArgs = class UpdateManyUserSaveArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleUpdateManyMutationInput_1.UserSaveArticleUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleUpdateManyMutationInput_1.UserSaveArticleUpdateManyMutationInput)
], UpdateManyUserSaveArticleArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleWhereInput_1.UserSaveArticleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleWhereInput_1.UserSaveArticleWhereInput)
], UpdateManyUserSaveArticleArgs.prototype, "where", void 0);
UpdateManyUserSaveArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyUserSaveArticleArgs);
exports.UpdateManyUserSaveArticleArgs = UpdateManyUserSaveArticleArgs;
