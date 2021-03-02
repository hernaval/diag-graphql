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
exports.UserSaveArticleRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Article_1 = require("../../../models/Article");
const User_1 = require("../../../models/User");
const UserSaveArticle_1 = require("../../../models/UserSaveArticle");
let UserSaveArticleRelationsResolver = class UserSaveArticleRelationsResolver {
    async User(userSaveArticle, ctx) {
        return ctx.prisma.userSaveArticle.findUnique({
            where: {
                userId_articleId: {
                    userId: userSaveArticle.userId,
                    articleId: userSaveArticle.articleId,
                },
            },
        }).User({});
    }
    async Article(userSaveArticle, ctx) {
        return ctx.prisma.userSaveArticle.findUnique({
            where: {
                userId_articleId: {
                    userId: userSaveArticle.userId,
                    articleId: userSaveArticle.articleId,
                },
            },
        }).Article({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserSaveArticle_1.UserSaveArticle, Object]),
    __metadata("design:returntype", Promise)
], UserSaveArticleRelationsResolver.prototype, "User", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Article_1.Article, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserSaveArticle_1.UserSaveArticle, Object]),
    __metadata("design:returntype", Promise)
], UserSaveArticleRelationsResolver.prototype, "Article", null);
UserSaveArticleRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserSaveArticle_1.UserSaveArticle)
], UserSaveArticleRelationsResolver);
exports.UserSaveArticleRelationsResolver = UserSaveArticleRelationsResolver;
