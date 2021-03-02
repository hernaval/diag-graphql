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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Survey_1 = require("../../../models/Survey");
const User_1 = require("../../../models/User");
const UserSaveArticle_1 = require("../../../models/UserSaveArticle");
const UserArticlesArgs_1 = require("./args/UserArticlesArgs");
const UserSurveysArgs_1 = require("./args/UserSurveysArgs");
let UserRelationsResolver = class UserRelationsResolver {
    async Surveys(user, ctx, args) {
        return ctx.prisma.user.findUnique({
            where: {
                id: user.id,
            },
        }).Surveys(args);
    }
    async Articles(user, ctx, args) {
        return ctx.prisma.user.findUnique({
            where: {
                id: user.id,
            },
        }).Articles(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Survey_1.Survey], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserSurveysArgs_1.UserSurveysArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Surveys", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserSaveArticle_1.UserSaveArticle], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User, Object, UserArticlesArgs_1.UserArticlesArgs]),
    __metadata("design:returntype", Promise)
], UserRelationsResolver.prototype, "Articles", null);
UserRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], UserRelationsResolver);
exports.UserRelationsResolver = UserRelationsResolver;
