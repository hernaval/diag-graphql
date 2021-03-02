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
exports.DimensionCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionCreateNestedManyWithoutDimensionInput_1 = require("../inputs/QuestionCreateNestedManyWithoutDimensionInput");
const QuizCreateNestedOneWithoutDimensionsInput_1 = require("../inputs/QuizCreateNestedOneWithoutDimensionsInput");
let DimensionCreateInput = class DimensionCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], DimensionCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], DimensionCreateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DimensionCreateInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], DimensionCreateInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionCreateNestedManyWithoutDimensionInput_1.QuestionCreateNestedManyWithoutDimensionInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionCreateNestedManyWithoutDimensionInput_1.QuestionCreateNestedManyWithoutDimensionInput)
], DimensionCreateInput.prototype, "Questions", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizCreateNestedOneWithoutDimensionsInput_1.QuizCreateNestedOneWithoutDimensionsInput, {
        nullable: false
    }),
    __metadata("design:type", QuizCreateNestedOneWithoutDimensionsInput_1.QuizCreateNestedOneWithoutDimensionsInput)
], DimensionCreateInput.prototype, "Quiz", void 0);
DimensionCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionCreateInput);
exports.DimensionCreateInput = DimensionCreateInput;
