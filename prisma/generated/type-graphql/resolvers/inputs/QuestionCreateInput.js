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
exports.QuestionCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateNestedOneWithoutQuestionsInput_1 = require("../inputs/DimensionCreateNestedOneWithoutQuestionsInput");
let QuestionCreateInput = class QuestionCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], QuestionCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], QuestionCreateInput.prototype, "sentence", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], QuestionCreateInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], QuestionCreateInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateNestedOneWithoutQuestionsInput_1.DimensionCreateNestedOneWithoutQuestionsInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionCreateNestedOneWithoutQuestionsInput_1.DimensionCreateNestedOneWithoutQuestionsInput)
], QuestionCreateInput.prototype, "Dimension", void 0);
QuestionCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionCreateInput);
exports.QuestionCreateInput = QuestionCreateInput;
