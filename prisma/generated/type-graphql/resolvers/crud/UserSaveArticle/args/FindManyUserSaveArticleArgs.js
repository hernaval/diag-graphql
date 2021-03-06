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
exports.FindManyUserSaveArticleArgs = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleOrderByInput_1 = require("../../../inputs/UserSaveArticleOrderByInput");
const UserSaveArticleWhereInput_1 = require("../../../inputs/UserSaveArticleWhereInput");
const UserSaveArticleWhereUniqueInput_1 = require("../../../inputs/UserSaveArticleWhereUniqueInput");
const UserSaveArticleScalarFieldEnum_1 = require("../../../../enums/UserSaveArticleScalarFieldEnum");
let FindManyUserSaveArticleArgs = class FindManyUserSaveArticleArgs {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleWhereInput_1.UserSaveArticleWhereInput, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleWhereInput_1.UserSaveArticleWhereInput)
], FindManyUserSaveArticleArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleOrderByInput_1.UserSaveArticleOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyUserSaveArticleArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput)
], FindManyUserSaveArticleArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyUserSaveArticleArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindManyUserSaveArticleArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarFieldEnum_1.UserSaveArticleScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindManyUserSaveArticleArgs.prototype, "distinct", void 0);
FindManyUserSaveArticleArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindManyUserSaveArticleArgs);
exports.FindManyUserSaveArticleArgs = FindManyUserSaveArticleArgs;
