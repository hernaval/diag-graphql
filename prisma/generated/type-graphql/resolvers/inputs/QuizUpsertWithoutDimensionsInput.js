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
exports.QuizUpsertWithoutDimensionsInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuizCreateWithoutDimensionsInput_1 = require("../inputs/QuizCreateWithoutDimensionsInput");
const QuizUpdateWithoutDimensionsInput_1 = require("../inputs/QuizUpdateWithoutDimensionsInput");
let QuizUpsertWithoutDimensionsInput = class QuizUpsertWithoutDimensionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateWithoutDimensionsInput_1.QuizUpdateWithoutDimensionsInput, {
        nullable: false
    }),
    __metadata("design:type", QuizUpdateWithoutDimensionsInput_1.QuizUpdateWithoutDimensionsInput)
], QuizUpsertWithoutDimensionsInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizCreateWithoutDimensionsInput_1.QuizCreateWithoutDimensionsInput, {
        nullable: false
    }),
    __metadata("design:type", QuizCreateWithoutDimensionsInput_1.QuizCreateWithoutDimensionsInput)
], QuizUpsertWithoutDimensionsInput.prototype, "create", void 0);
QuizUpsertWithoutDimensionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuizUpsertWithoutDimensionsInput);
exports.QuizUpsertWithoutDimensionsInput = QuizUpsertWithoutDimensionsInput;
