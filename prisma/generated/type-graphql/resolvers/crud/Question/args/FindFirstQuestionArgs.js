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
exports.FindFirstQuestionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionOrderByInput_1 = require("../../../inputs/QuestionOrderByInput");
const QuestionWhereInput_1 = require("../../../inputs/QuestionWhereInput");
const QuestionWhereUniqueInput_1 = require("../../../inputs/QuestionWhereUniqueInput");
const QuestionScalarFieldEnum_1 = require("../../../../enums/QuestionScalarFieldEnum");
let FindFirstQuestionArgs = class FindFirstQuestionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuestionWhereInput_1.QuestionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionWhereInput_1.QuestionWhereInput)
], FindFirstQuestionArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionOrderByInput_1.QuestionOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstQuestionArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionWhereUniqueInput_1.QuestionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionWhereUniqueInput_1.QuestionWhereUniqueInput)
], FindFirstQuestionArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstQuestionArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], FindFirstQuestionArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionScalarFieldEnum_1.QuestionScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], FindFirstQuestionArgs.prototype, "distinct", void 0);
FindFirstQuestionArgs = __decorate([
    TypeGraphQL.ArgsType()
], FindFirstQuestionArgs);
exports.FindFirstQuestionArgs = FindFirstQuestionArgs;
