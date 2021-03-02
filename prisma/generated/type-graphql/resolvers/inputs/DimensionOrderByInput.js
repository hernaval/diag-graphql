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
exports.DimensionOrderByInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuizOrderByInput_1 = require("../inputs/QuizOrderByInput");
const SortOrder_1 = require("../../enums/SortOrder");
let DimensionOrderByInput = class DimensionOrderByInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionOrderByInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionOrderByInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionOrderByInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionOrderByInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionOrderByInput.prototype, "quizId", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizOrderByInput_1.QuizOrderByInput, {
        nullable: true
    }),
    __metadata("design:type", QuizOrderByInput_1.QuizOrderByInput)
], DimensionOrderByInput.prototype, "Quiz", void 0);
DimensionOrderByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionOrderByInput);
exports.DimensionOrderByInput = DimensionOrderByInput;
