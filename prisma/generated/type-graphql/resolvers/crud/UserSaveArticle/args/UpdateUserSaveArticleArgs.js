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
exports.UpdateUserSaveArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleUpdateInput_1 = require("../../../inputs/UserSaveArticleUpdateInput");
const UserSaveArticleWhereUniqueInput_1 = require("../../../inputs/UserSaveArticleWhereUniqueInput");
let UpdateUserSaveArticleArgs = class UpdateUserSaveArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleUpdateInput_1.UserSaveArticleUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleUpdateInput_1.UserSaveArticleUpdateInput)
], UpdateUserSaveArticleArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput)
], UpdateUserSaveArticleArgs.prototype, "where", void 0);
UpdateUserSaveArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateUserSaveArticleArgs);
exports.UpdateUserSaveArticleArgs = UpdateUserSaveArticleArgs;
