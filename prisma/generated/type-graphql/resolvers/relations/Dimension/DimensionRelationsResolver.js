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
exports.DimensionRelationsResolver = void 0;
const TypeGraphQL = require("type-graphql");
const Dimension_1 = require("../../../models/Dimension");
const Question_1 = require("../../../models/Question");
const Quiz_1 = require("../../../models/Quiz");
const DimensionQuestionsArgs_1 = require("./args/DimensionQuestionsArgs");
let DimensionRelationsResolver = class DimensionRelationsResolver {
    async Questions(dimension, ctx, args) {
        return ctx.prisma.dimension.findUnique({
            where: {
                id: dimension.id,
            },
        }).Questions(args);
    }
    async Quiz(dimension, ctx) {
        return ctx.prisma.dimension.findUnique({
            where: {
                id: dimension.id,
            },
        }).Quiz({});
    }
};
__decorate([
    TypeGraphQL.FieldResolver(_type => [Question_1.Question], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dimension_1.Dimension, Object, DimensionQuestionsArgs_1.DimensionQuestionsArgs]),
    __metadata("design:returntype", Promise)
], DimensionRelationsResolver.prototype, "Questions", null);
__decorate([
    TypeGraphQL.FieldResolver(_type => Quiz_1.Quiz, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Root()), __param(1, TypeGraphQL.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dimension_1.Dimension, Object]),
    __metadata("design:returntype", Promise)
], DimensionRelationsResolver.prototype, "Quiz", null);
DimensionRelationsResolver = __decorate([
    TypeGraphQL.Resolver(_of => Dimension_1.Dimension)
], DimensionRelationsResolver);
exports.DimensionRelationsResolver = DimensionRelationsResolver;
