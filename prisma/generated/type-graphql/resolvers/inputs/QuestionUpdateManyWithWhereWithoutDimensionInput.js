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
exports.QuestionUpdateManyWithWhereWithoutDimensionInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionScalarWhereInput_1 = require("../inputs/QuestionScalarWhereInput");
const QuestionUpdateManyMutationInput_1 = require("../inputs/QuestionUpdateManyMutationInput");
let QuestionUpdateManyWithWhereWithoutDimensionInput = class QuestionUpdateManyWithWhereWithoutDimensionInput {
};
__decorate([
    TypeGraphQL.Field(_type => QuestionScalarWhereInput_1.QuestionScalarWhereInput, {
        nullable: false
    }),
    __metadata("design:type", QuestionScalarWhereInput_1.QuestionScalarWhereInput)
], QuestionUpdateManyWithWhereWithoutDimensionInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionUpdateManyMutationInput_1.QuestionUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", QuestionUpdateManyMutationInput_1.QuestionUpdateManyMutationInput)
], QuestionUpdateManyWithWhereWithoutDimensionInput.prototype, "data", void 0);
QuestionUpdateManyWithWhereWithoutDimensionInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionUpdateManyWithWhereWithoutDimensionInput);
exports.QuestionUpdateManyWithWhereWithoutDimensionInput = QuestionUpdateManyWithWhereWithoutDimensionInput;
