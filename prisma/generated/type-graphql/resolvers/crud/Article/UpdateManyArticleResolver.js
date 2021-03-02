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
exports.UpdateManyArticleResolver = void 0;
const TypeGraphQL = require("type-graphql");
const UpdateManyArticleArgs_1 = require("./args/UpdateManyArticleArgs");
const Article_1 = require("../../../models/Article");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
let UpdateManyArticleResolver = class UpdateManyArticleResolver {
    async updateManyArticle(ctx, args) {
        return ctx.prisma.article.updateMany(args);
    }
};
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyArticleArgs_1.UpdateManyArticleArgs]),
    __metadata("design:returntype", Promise)
], UpdateManyArticleResolver.prototype, "updateManyArticle", null);
UpdateManyArticleResolver = __decorate([
    TypeGraphQL.Resolver(_of => Article_1.Article)
], UpdateManyArticleResolver);
exports.UpdateManyArticleResolver = UpdateManyArticleResolver;
