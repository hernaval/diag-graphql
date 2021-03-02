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
exports.ArticleCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateArticleArgs_1 = require("./args/AggregateArticleArgs");
const CreateArticleArgs_1 = require("./args/CreateArticleArgs");
const DeleteArticleArgs_1 = require("./args/DeleteArticleArgs");
const DeleteManyArticleArgs_1 = require("./args/DeleteManyArticleArgs");
const FindFirstArticleArgs_1 = require("./args/FindFirstArticleArgs");
const FindManyArticleArgs_1 = require("./args/FindManyArticleArgs");
const FindUniqueArticleArgs_1 = require("./args/FindUniqueArticleArgs");
const UpdateArticleArgs_1 = require("./args/UpdateArticleArgs");
const UpdateManyArticleArgs_1 = require("./args/UpdateManyArticleArgs");
const UpsertArticleArgs_1 = require("./args/UpsertArticleArgs");
const Article_1 = require("../../../models/Article");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateArticle_1 = require("../../outputs/AggregateArticle");
let ArticleCrudResolver = class ArticleCrudResolver {
    async article(ctx, args) {
        return ctx.prisma.article.findUnique(args);
    }
    async findFirstArticle(ctx, args) {
        return ctx.prisma.article.findFirst(args);
    }
    async articles(ctx, args) {
        return ctx.prisma.article.findMany(args);
    }
    async createArticle(ctx, args) {
        return ctx.prisma.article.create(args);
    }
    async deleteArticle(ctx, args) {
        return ctx.prisma.article.delete(args);
    }
    async updateArticle(ctx, args) {
        return ctx.prisma.article.update(args);
    }
    async deleteManyArticle(ctx, args) {
        return ctx.prisma.article.deleteMany(args);
    }
    async updateManyArticle(ctx, args) {
        return ctx.prisma.article.updateMany(args);
    }
    async upsertArticle(ctx, args) {
        return ctx.prisma.article.upsert(args);
    }
    async aggregateArticle(ctx, info, args) {
        function transformFields(fields) {
            return Object.fromEntries(Object.entries(fields)
                // remove __typename and others
                .filter(([key, value]) => !key.startsWith("__"))
                .map(([key, value]) => {
                if (Object.keys(value).length === 0) {
                    return [key, true];
                }
                return [key, transformFields(value)];
            }));
        }
        return ctx.prisma.article.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Article_1.Article, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueArticleArgs_1.FindUniqueArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "article", null);
__decorate([
    TypeGraphQL.Query(_returns => Article_1.Article, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstArticleArgs_1.FindFirstArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "findFirstArticle", null);
__decorate([
    TypeGraphQL.Query(_returns => [Article_1.Article], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyArticleArgs_1.FindManyArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "articles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Article_1.Article, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateArticleArgs_1.CreateArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "createArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Article_1.Article, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteArticleArgs_1.DeleteArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "deleteArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Article_1.Article, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateArticleArgs_1.UpdateArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "updateArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyArticleArgs_1.DeleteManyArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "deleteManyArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyArticleArgs_1.UpdateManyArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "updateManyArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Article_1.Article, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertArticleArgs_1.UpsertArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "upsertArticle", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateArticle_1.AggregateArticle, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateArticleArgs_1.AggregateArticleArgs]),
    __metadata("design:returntype", Promise)
], ArticleCrudResolver.prototype, "aggregateArticle", null);
ArticleCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Article_1.Article)
], ArticleCrudResolver);
exports.ArticleCrudResolver = ArticleCrudResolver;
