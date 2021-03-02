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
exports.QuestionOrderByInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionOrderByInput_1 = require("../inputs/DimensionOrderByInput");
const SortOrder_1 = require("../../enums/SortOrder");
let QuestionOrderByInput = class QuestionOrderByInput {
};
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByInput.prototype, "sentence", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionOrderByInput.prototype, "dimensionId", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionOrderByInput_1.DimensionOrderByInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionOrderByInput_1.DimensionOrderByInput)
], QuestionOrderByInput.prototype, "Dimension", void 0);
QuestionOrderByInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionOrderByInput);
exports.QuestionOrderByInput = QuestionOrderByInput;
