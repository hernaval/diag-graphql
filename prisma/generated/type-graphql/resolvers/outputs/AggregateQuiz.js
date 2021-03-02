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
exports.AggregateQuiz = void 0;
const TypeGraphQL = require("type-graphql");
const QuizCountAggregate_1 = require("../outputs/QuizCountAggregate");
const QuizMaxAggregate_1 = require("../outputs/QuizMaxAggregate");
const QuizMinAggregate_1 = require("../outputs/QuizMinAggregate");
let AggregateQuiz = class AggregateQuiz {
};
__decorate([
    TypeGraphQL.Field(_type => QuizCountAggregate_1.QuizCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuizCountAggregate_1.QuizCountAggregate)
], AggregateQuiz.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizMinAggregate_1.QuizMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuizMinAggregate_1.QuizMinAggregate)
], AggregateQuiz.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizMaxAggregate_1.QuizMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuizMaxAggregate_1.QuizMaxAggregate)
], AggregateQuiz.prototype, "max", void 0);
AggregateQuiz = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateQuiz);
exports.AggregateQuiz = AggregateQuiz;
