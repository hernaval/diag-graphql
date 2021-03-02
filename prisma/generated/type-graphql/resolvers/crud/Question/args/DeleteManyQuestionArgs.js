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
exports.DeleteManyQuestionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionWhereInput_1 = require("../../../inputs/QuestionWhereInput");
let DeleteManyQuestionArgs = class DeleteManyQuestionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuestionWhereInput_1.QuestionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionWhereInput_1.QuestionWhereInput)
], DeleteManyQuestionArgs.prototype, "where", void 0);
DeleteManyQuestionArgs = __decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQuestionArgs);
exports.DeleteManyQuestionArgs = DeleteManyQuestionArgs;
