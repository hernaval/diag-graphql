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
exports.SurveyCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateSurveyArgs_1 = require("./args/AggregateSurveyArgs");
const CreateSurveyArgs_1 = require("./args/CreateSurveyArgs");
const DeleteManySurveyArgs_1 = require("./args/DeleteManySurveyArgs");
const DeleteSurveyArgs_1 = require("./args/DeleteSurveyArgs");
const FindFirstSurveyArgs_1 = require("./args/FindFirstSurveyArgs");
const FindManySurveyArgs_1 = require("./args/FindManySurveyArgs");
const FindUniqueSurveyArgs_1 = require("./args/FindUniqueSurveyArgs");
const UpdateManySurveyArgs_1 = require("./args/UpdateManySurveyArgs");
const UpdateSurveyArgs_1 = require("./args/UpdateSurveyArgs");
const UpsertSurveyArgs_1 = require("./args/UpsertSurveyArgs");
const Survey_1 = require("../../../models/Survey");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateSurvey_1 = require("../../outputs/AggregateSurvey");
let SurveyCrudResolver = class SurveyCrudResolver {
    async survey(ctx, args) {
        return ctx.prisma.survey.findUnique(args);
    }
    async findFirstSurvey(ctx, args) {
        return ctx.prisma.survey.findFirst(args);
    }
    async surveys(ctx, args) {
        return ctx.prisma.survey.findMany(args);
    }
    async createSurvey(ctx, args) {
        return ctx.prisma.survey.create(args);
    }
    async deleteSurvey(ctx, args) {
        return ctx.prisma.survey.delete(args);
    }
    async updateSurvey(ctx, args) {
        return ctx.prisma.survey.update(args);
    }
    async deleteManySurvey(ctx, args) {
        return ctx.prisma.survey.deleteMany(args);
    }
    async updateManySurvey(ctx, args) {
        return ctx.prisma.survey.updateMany(args);
    }
    async upsertSurvey(ctx, args) {
        return ctx.prisma.survey.upsert(args);
    }
    async aggregateSurvey(ctx, info, args) {
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
        return ctx.prisma.survey.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Survey_1.Survey, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueSurveyArgs_1.FindUniqueSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "survey", null);
__decorate([
    TypeGraphQL.Query(_returns => Survey_1.Survey, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstSurveyArgs_1.FindFirstSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "findFirstSurvey", null);
__decorate([
    TypeGraphQL.Query(_returns => [Survey_1.Survey], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManySurveyArgs_1.FindManySurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "surveys", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Survey_1.Survey, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateSurveyArgs_1.CreateSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "createSurvey", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Survey_1.Survey, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteSurveyArgs_1.DeleteSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "deleteSurvey", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Survey_1.Survey, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateSurveyArgs_1.UpdateSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "updateSurvey", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManySurveyArgs_1.DeleteManySurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "deleteManySurvey", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManySurveyArgs_1.UpdateManySurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "updateManySurvey", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Survey_1.Survey, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertSurveyArgs_1.UpsertSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "upsertSurvey", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateSurvey_1.AggregateSurvey, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateSurveyArgs_1.AggregateSurveyArgs]),
    __metadata("design:returntype", Promise)
], SurveyCrudResolver.prototype, "aggregateSurvey", null);
SurveyCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Survey_1.Survey)
], SurveyCrudResolver);
exports.SurveyCrudResolver = SurveyCrudResolver;
