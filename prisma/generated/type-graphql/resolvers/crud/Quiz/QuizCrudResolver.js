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
exports.QuizCrudResolver = void 0;
const TypeGraphQL = require("type-graphql");
const graphql_fields_1 = require("graphql-fields");
const AggregateQuizArgs_1 = require("./args/AggregateQuizArgs");
const CreateQuizArgs_1 = require("./args/CreateQuizArgs");
const DeleteManyQuizArgs_1 = require("./args/DeleteManyQuizArgs");
const DeleteQuizArgs_1 = require("./args/DeleteQuizArgs");
const FindFirstQuizArgs_1 = require("./args/FindFirstQuizArgs");
const FindManyQuizArgs_1 = require("./args/FindManyQuizArgs");
const FindUniqueQuizArgs_1 = require("./args/FindUniqueQuizArgs");
const UpdateManyQuizArgs_1 = require("./args/UpdateManyQuizArgs");
const UpdateQuizArgs_1 = require("./args/UpdateQuizArgs");
const UpsertQuizArgs_1 = require("./args/UpsertQuizArgs");
const Quiz_1 = require("../../../models/Quiz");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateQuiz_1 = require("../../outputs/AggregateQuiz");
let QuizCrudResolver = class QuizCrudResolver {
    async quiz(ctx, args) {
        return ctx.prisma.quiz.findUnique(args);
    }
    async findFirstQuiz(ctx, args) {
        return ctx.prisma.quiz.findFirst(args);
    }
    async quizzes(ctx, args) {
        return ctx.prisma.quiz.findMany(args);
    }
    async createQuiz(ctx, args) {
        return ctx.prisma.quiz.create(args);
    }
    async deleteQuiz(ctx, args) {
        return ctx.prisma.quiz.delete(args);
    }
    async updateQuiz(ctx, args) {
        return ctx.prisma.quiz.update(args);
    }
    async deleteManyQuiz(ctx, args) {
        return ctx.prisma.quiz.deleteMany(args);
    }
    async updateManyQuiz(ctx, args) {
        return ctx.prisma.quiz.updateMany(args);
    }
    async upsertQuiz(ctx, args) {
        return ctx.prisma.quiz.upsert(args);
    }
    async aggregateQuiz(ctx, info, args) {
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
        return ctx.prisma.quiz.aggregate({
            ...args,
            ...transformFields(graphql_fields_1.default(info)),
        });
    }
};
__decorate([
    TypeGraphQL.Query(_returns => Quiz_1.Quiz, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindUniqueQuizArgs_1.FindUniqueQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "quiz", null);
__decorate([
    TypeGraphQL.Query(_returns => Quiz_1.Quiz, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindFirstQuizArgs_1.FindFirstQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "findFirstQuiz", null);
__decorate([
    TypeGraphQL.Query(_returns => [Quiz_1.Quiz], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, FindManyQuizArgs_1.FindManyQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "quizzes", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Quiz_1.Quiz, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, CreateQuizArgs_1.CreateQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "createQuiz", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Quiz_1.Quiz, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteQuizArgs_1.DeleteQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "deleteQuiz", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Quiz_1.Quiz, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateQuizArgs_1.UpdateQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "updateQuiz", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, DeleteManyQuizArgs_1.DeleteManyQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "deleteManyQuiz", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpdateManyQuizArgs_1.UpdateManyQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "updateManyQuiz", null);
__decorate([
    TypeGraphQL.Mutation(_returns => Quiz_1.Quiz, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, UpsertQuizArgs_1.UpsertQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "upsertQuiz", null);
__decorate([
    TypeGraphQL.Query(_returns => AggregateQuiz_1.AggregateQuiz, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()), __param(1, TypeGraphQL.Info()), __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateQuizArgs_1.AggregateQuizArgs]),
    __metadata("design:returntype", Promise)
], QuizCrudResolver.prototype, "aggregateQuiz", null);
QuizCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => Quiz_1.Quiz)
], QuizCrudResolver);
exports.QuizCrudResolver = QuizCrudResolver;
