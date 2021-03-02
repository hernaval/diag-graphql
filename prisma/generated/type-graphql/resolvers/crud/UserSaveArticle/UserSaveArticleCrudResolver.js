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
exports.UserSaveArticleCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateUserSaveArticleArgs_1 = require("./args/AggregateUserSaveArticleArgs");
const CreateUserSaveArticleArgs_1 = require("./args/CreateUserSaveArticleArgs");
const DeleteManyUserSaveArticleArgs_1 = require("./args/DeleteManyUserSaveArticleArgs");
const DeleteUserSaveArticleArgs_1 = require("./args/DeleteUserSaveArticleArgs");
const FindFirstUserSaveArticleArgs_1 = require("./args/FindFirstUserSaveArticleArgs");
const FindManyUserSaveArticleArgs_1 = require("./args/FindManyUserSaveArticleArgs");
const FindUniqueUserSaveArticleArgs_1 = require("./args/FindUniqueUserSaveArticleArgs");
const UpdateManyUserSaveArticleArgs_1 = require("./args/UpdateManyUserSaveArticleArgs");
const UpdateUserSaveArticleArgs_1 = require("./args/UpdateUserSaveArticleArgs");
const UpsertUserSaveArticleArgs_1 = require("./args/UpsertUserSaveArticleArgs");
const UserSaveArticle_1 = require("../../../models/UserSaveArticle");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUserSaveArticle_1 = require("../../outputs/AggregateUserSaveArticle");
let UserSaveArticleCrudResolver = class UserSaveArticleCrudResolver {
    async userSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.findUnique(args);
    }
    async findFirstUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.findFirst(args);
    }
    async userSaveArticles(ctx, args) {
        return ctx.prisma.userSaveArticle.findMany(args);
    }
    async createUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.create(args);
    }
    async deleteUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.delete(args);
    }
    async updateUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.update(args);
    }
    async deleteManyUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.deleteMany(args);
    }
    async updateManyUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.updateMany(args);
    }
    async upsertUserSaveArticle(ctx, args) {
        return ctx.prisma.userSaveArticle.upsert(args);
    }
    async aggregateUserSaveArticle(ctx, info, args) {
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
        return ctx.prisma.userSaveArticle.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueUserSaveArticleArgs_1.FindUniqueUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "userSaveArticle", null);
__decorate([
    TypeGraphQL.Query(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstUserSaveArticleArgs_1.FindFirstUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "findFirstUserSaveArticle", null);
__decorate([
    TypeGraphQL.Query(_returns => [UserSaveArticle_1.UserSaveArticle], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyUserSaveArticleArgs_1.FindManyUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "userSaveArticles", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateUserSaveArticleArgs_1.CreateUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "createUserSaveArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteUserSaveArticleArgs_1.DeleteUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "deleteUserSaveArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateUserSaveArticleArgs_1.UpdateUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "updateUserSaveArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyUserSaveArticleArgs_1.DeleteManyUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "deleteManyUserSaveArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyUserSaveArticleArgs_1.UpdateManyUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "updateManyUserSaveArticle", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UserSaveArticle_1.UserSaveArticle, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertUserSaveArticleArgs_1.UpsertUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "upsertUserSaveArticle", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateUserSaveArticle_1.AggregateUserSaveArticle, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserSaveArticleArgs_1.AggregateUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], UserSaveArticleCrudResolver.prototype, "aggregateUserSaveArticle", null);
UserSaveArticleCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserSaveArticle_1.UserSaveArticle)
], UserSaveArticleCrudResolver);
exports.UserSaveArticleCrudResolver = UserSaveArticleCrudResolver;
