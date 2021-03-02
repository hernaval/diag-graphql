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
exports.ArticleRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Article_1 = require("../../../models/Article");
const UserSaveArticle_1 = require("../../../models/UserSaveArticle");
const ArticleUsersArgs_1 = require("./args/ArticleUsersArgs");
let ArticleRelationsResolver = class ArticleRelationsResolver {
    async Users(article, ctx, args) {
        return ctx.prisma.article.findUnique({
            where: {
                id: article.id,
            },
        }).Users(args);
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [UserSaveArticle_1.UserSaveArticle], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Article_1.Article, Object, ArticleUsersArgs_1.ArticleUsersArgs]),
    __metadata("design:returntype", Promise)
], ArticleRelationsResolver.prototype, "Users", null);
ArticleRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Article_1.Article)
], ArticleRelationsResolver);
exports.ArticleRelationsResolver = ArticleRelationsResolver;
