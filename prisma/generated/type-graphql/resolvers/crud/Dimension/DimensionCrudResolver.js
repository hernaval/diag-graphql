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
exports.DimensionCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateDimensionArgs_1 = require("./args/AggregateDimensionArgs");
const CreateDimensionArgs_1 = require("./args/CreateDimensionArgs");
const DeleteDimensionArgs_1 = require("./args/DeleteDimensionArgs");
const DeleteManyDimensionArgs_1 = require("./args/DeleteManyDimensionArgs");
const FindFirstDimensionArgs_1 = require("./args/FindFirstDimensionArgs");
const FindManyDimensionArgs_1 = require("./args/FindManyDimensionArgs");
const FindUniqueDimensionArgs_1 = require("./args/FindUniqueDimensionArgs");
const UpdateDimensionArgs_1 = require("./args/UpdateDimensionArgs");
const UpdateManyDimensionArgs_1 = require("./args/UpdateManyDimensionArgs");
const UpsertDimensionArgs_1 = require("./args/UpsertDimensionArgs");
const Dimension_1 = require("../../../models/Dimension");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateDimension_1 = require("../../outputs/AggregateDimension");
let DimensionCrudResolver = class DimensionCrudResolver {
    async dimension(ctx, args) {
        return ctx.prisma.dimension.findUnique(args);
    }
    async findFirstDimension(ctx, args) {
        return ctx.prisma.dimension.findFirst(args);
    }
    async dimensions(ctx, args) {
        return ctx.prisma.dimension.findMany(args);
    }
    async createDimension(ctx, args) {
        return ctx.prisma.dimension.create(args);
    }
    async deleteDimension(ctx, args) {
        return ctx.prisma.dimension.delete(args);
    }
    async updateDimension(ctx, args) {
        return ctx.prisma.dimension.update(args);
    }
    async deleteManyDimension(ctx, args) {
        return ctx.prisma.dimension.deleteMany(args);
    }
    async updateManyDimension(ctx, args) {
        return ctx.prisma.dimension.updateMany(args);
    }
    async upsertDimension(ctx, args) {
        return ctx.prisma.dimension.upsert(args);
    }
    async aggregateDimension(ctx, info, args) {
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
        return ctx.prisma.dimension.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Dimension_1.Dimension, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueDimensionArgs_1.FindUniqueDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "dimension", null);
__decorate([
    TypeGraphQL.Query(_returns => Dimension_1.Dimension, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstDimensionArgs_1.FindFirstDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "findFirstDimension", null);
__decorate([
    TypeGraphQL.Query(_returns => [Dimension_1.Dimension], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyDimensionArgs_1.FindManyDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "dimensions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Dimension_1.Dimension, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateDimensionArgs_1.CreateDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "createDimension", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Dimension_1.Dimension, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteDimensionArgs_1.DeleteDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "deleteDimension", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Dimension_1.Dimension, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateDimensionArgs_1.UpdateDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "updateDimension", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyDimensionArgs_1.DeleteManyDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "deleteManyDimension", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyDimensionArgs_1.UpdateManyDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "updateManyDimension", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Dimension_1.Dimension, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertDimensionArgs_1.UpsertDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "upsertDimension", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateDimension_1.AggregateDimension, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateDimensionArgs_1.AggregateDimensionArgs]),
    __metadata("design:returntype", Promise)
], DimensionCrudResolver.prototype, "aggregateDimension", null);
DimensionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Dimension_1.Dimension)
], DimensionCrudResolver);
exports.DimensionCrudResolver = DimensionCrudResolver;
