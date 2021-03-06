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
exports.AggregateUserSaveArticleResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateUserSaveArticleArgs_1 = require("./args/AggregateUserSaveArticleArgs");
const UserSaveArticle_1 = require("../../../models/UserSaveArticle");
const AggregateUserSaveArticle_1 = require("../../outputs/AggregateUserSaveArticle");
let AggregateUserSaveArticleResolver = class AggregateUserSaveArticleResolver {
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
    TypeGraphQL.Query(_returns => AggregateUserSaveArticle_1.AggregateUserSaveArticle, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUserSaveArticleArgs_1.AggregateUserSaveArticleArgs]),
    __metadata("design:returntype", Promise)
], AggregateUserSaveArticleResolver.prototype, "aggregateUserSaveArticle", null);
AggregateUserSaveArticleResolver = __decorate([
    TypeGraphQL.Resolver(_of => UserSaveArticle_1.UserSaveArticle)
], AggregateUserSaveArticleResolver);
exports.AggregateUserSaveArticleResolver = AggregateUserSaveArticleResolver;
