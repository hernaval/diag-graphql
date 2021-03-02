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
exports.QuestionCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateQuestionArgs_1 = require("./args/AggregateQuestionArgs");
const CreateQuestionArgs_1 = require("./args/CreateQuestionArgs");
const DeleteManyQuestionArgs_1 = require("./args/DeleteManyQuestionArgs");
const DeleteQuestionArgs_1 = require("./args/DeleteQuestionArgs");
const FindFirstQuestionArgs_1 = require("./args/FindFirstQuestionArgs");
const FindManyQuestionArgs_1 = require("./args/FindManyQuestionArgs");
const FindUniqueQuestionArgs_1 = require("./args/FindUniqueQuestionArgs");
const UpdateManyQuestionArgs_1 = require("./args/UpdateManyQuestionArgs");
const UpdateQuestionArgs_1 = require("./args/UpdateQuestionArgs");
const UpsertQuestionArgs_1 = require("./args/UpsertQuestionArgs");
const Question_1 = require("../../../models/Question");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuestion_1 = require("../../outputs/AggregateQuestion");
let QuestionCrudResolver = class QuestionCrudResolver {
    async question(ctx, args) {
        return ctx.prisma.question.findUnique(args);
    }
    async findFirstQuestion(ctx, args) {
        return ctx.prisma.question.findFirst(args);
    }
    async questions(ctx, args) {
        return ctx.prisma.question.findMany(args);
    }
    async createQuestion(ctx, args) {
        return ctx.prisma.question.create(args);
    }
    async deleteQuestion(ctx, args) {
        return ctx.prisma.question.delete(args);
    }
    async updateQuestion(ctx, args) {
        return ctx.prisma.question.update(args);
    }
    async deleteManyQuestion(ctx, args) {
        return ctx.prisma.question.deleteMany(args);
    }
    async updateManyQuestion(ctx, args) {
        return ctx.prisma.question.updateMany(args);
    }
    async upsertQuestion(ctx, args) {
        return ctx.prisma.question.upsert(args);
    }
    async aggregateQuestion(ctx, info, args) {
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
        return ctx.prisma.question.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueQuestionArgs_1.FindUniqueQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "question", null);
__decorate([
    TypeGraphQL.Query(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstQuestionArgs_1.FindFirstQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "findFirstQuestion", null);
__decorate([
    TypeGraphQL.Query(_returns => [Question_1.Question], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyQuestionArgs_1.FindManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "questions", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateQuestionArgs_1.CreateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "createQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteQuestionArgs_1.DeleteQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "deleteQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateQuestionArgs_1.UpdateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "updateQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyQuestionArgs_1.DeleteManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "deleteManyQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyQuestionArgs_1.UpdateManyQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "updateManyQuestion", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Question_1.Question, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertQuestionArgs_1.UpsertQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "upsertQuestion", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateQuestion_1.AggregateQuestion, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateQuestionArgs_1.AggregateQuestionArgs]),
    __metadata("design:returntype", Promise)
], QuestionCrudResolver.prototype, "aggregateQuestion", null);
QuestionCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Question_1.Question)
], QuestionCrudResolver);
exports.QuestionCrudResolver = QuestionCrudResolver;
