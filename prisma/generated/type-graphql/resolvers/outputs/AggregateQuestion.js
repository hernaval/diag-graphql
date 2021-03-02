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
exports.AggregateQuestion = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionCountAggregate_1 = require("../outputs/QuestionCountAggregate");
const QuestionMaxAggregate_1 = require("../outputs/QuestionMaxAggregate");
const QuestionMinAggregate_1 = require("../outputs/QuestionMinAggregate");
let AggregateQuestion = class AggregateQuestion {
};
__decorate([
    TypeGraphQL.Field(_type => QuestionCountAggregate_1.QuestionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuestionCountAggregate_1.QuestionCountAggregate)
], AggregateQuestion.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionMinAggregate_1.QuestionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuestionMinAggregate_1.QuestionMinAggregate)
], AggregateQuestion.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionMaxAggregate_1.QuestionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", QuestionMaxAggregate_1.QuestionMaxAggregate)
], AggregateQuestion.prototype, "max", void 0);
AggregateQuestion = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateQuestion);
exports.AggregateQuestion = AggregateQuestion;
