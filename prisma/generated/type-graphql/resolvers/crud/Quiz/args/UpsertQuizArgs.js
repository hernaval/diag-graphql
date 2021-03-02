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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertQuizArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuizCreateInput_1 = require("../../../inputs/QuizCreateInput");
const QuizUpdateInput_1 = require("../../../inputs/QuizUpdateInput");
const QuizWhereUniqueInput_1 = require("../../../inputs/QuizWhereUniqueInput");
let UpsertQuizArgs = class UpsertQuizArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuizWhereUniqueInput_1.QuizWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", QuizWhereUniqueInput_1.QuizWhereUniqueInput)
], UpsertQuizArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizCreateInput_1.QuizCreateInput, {
        nullable: false
    }),
    __metadata("design:type", QuizCreateInput_1.QuizCreateInput)
], UpsertQuizArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateInput_1.QuizUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", QuizUpdateInput_1.QuizUpdateInput)
], UpsertQuizArgs.prototype, "update", void 0);
UpsertQuizArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertQuizArgs);
exports.UpsertQuizArgs = UpsertQuizArgs;
