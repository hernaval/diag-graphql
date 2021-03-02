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
exports.AggregateArticle = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleCountAggregate_1 = require("../outputs/ArticleCountAggregate");
const ArticleMaxAggregate_1 = require("../outputs/ArticleMaxAggregate");
const ArticleMinAggregate_1 = require("../outputs/ArticleMinAggregate");
let AggregateArticle = class AggregateArticle {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleCountAggregate_1.ArticleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", ArticleCountAggregate_1.ArticleCountAggregate)
], AggregateArticle.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleMinAggregate_1.ArticleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", ArticleMinAggregate_1.ArticleMinAggregate)
], AggregateArticle.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleMaxAggregate_1.ArticleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", ArticleMaxAggregate_1.ArticleMaxAggregate)
], AggregateArticle.prototype, "max", void 0);
AggregateArticle = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateArticle);
exports.AggregateArticle = AggregateArticle;
