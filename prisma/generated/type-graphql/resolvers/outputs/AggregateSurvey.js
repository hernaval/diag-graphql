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
exports.AggregateSurvey = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyAvgAggregate_1 = require("../outputs/SurveyAvgAggregate");
const SurveyCountAggregate_1 = require("../outputs/SurveyCountAggregate");
const SurveyMaxAggregate_1 = require("../outputs/SurveyMaxAggregate");
const SurveyMinAggregate_1 = require("../outputs/SurveyMinAggregate");
const SurveySumAggregate_1 = require("../outputs/SurveySumAggregate");
let AggregateSurvey = class AggregateSurvey {
};
__decorate([
    TypeGraphQL.Field(_type => SurveyCountAggregate_1.SurveyCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", SurveyCountAggregate_1.SurveyCountAggregate)
], AggregateSurvey.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyAvgAggregate_1.SurveyAvgAggregate, {
        nullable: true
    }),
    __metadata("design:type", SurveyAvgAggregate_1.SurveyAvgAggregate)
], AggregateSurvey.prototype, "avg", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveySumAggregate_1.SurveySumAggregate, {
        nullable: true
    }),
    __metadata("design:type", SurveySumAggregate_1.SurveySumAggregate)
], AggregateSurvey.prototype, "sum", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyMinAggregate_1.SurveyMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", SurveyMinAggregate_1.SurveyMinAggregate)
], AggregateSurvey.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyMaxAggregate_1.SurveyMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", SurveyMaxAggregate_1.SurveyMaxAggregate)
], AggregateSurvey.prototype, "max", void 0);
AggregateSurvey = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateSurvey);
exports.AggregateSurvey = AggregateSurvey;
