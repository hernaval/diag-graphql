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
exports.AggregateUserSaveArticle = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleCountAggregate_1 = require("../outputs/UserSaveArticleCountAggregate");
const UserSaveArticleMaxAggregate_1 = require("../outputs/UserSaveArticleMaxAggregate");
const UserSaveArticleMinAggregate_1 = require("../outputs/UserSaveArticleMinAggregate");
let AggregateUserSaveArticle = class AggregateUserSaveArticle {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleCountAggregate_1.UserSaveArticleCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleCountAggregate_1.UserSaveArticleCountAggregate)
], AggregateUserSaveArticle.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleMinAggregate_1.UserSaveArticleMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleMinAggregate_1.UserSaveArticleMinAggregate)
], AggregateUserSaveArticle.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleMaxAggregate_1.UserSaveArticleMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleMaxAggregate_1.UserSaveArticleMaxAggregate)
], AggregateUserSaveArticle.prototype, "max", void 0);
AggregateUserSaveArticle = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateUserSaveArticle);
exports.AggregateUserSaveArticle = AggregateUserSaveArticle;
