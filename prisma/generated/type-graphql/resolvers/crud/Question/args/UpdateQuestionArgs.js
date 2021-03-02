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
exports.UpdateQuestionArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionUpdateInput_1 = require("../../../inputs/QuestionUpdateInput");
const QuestionWhereUniqueInput_1 = require("../../../inputs/QuestionWhereUniqueInput");
let UpdateQuestionArgs = class UpdateQuestionArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuestionUpdateInput_1.QuestionUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", QuestionUpdateInput_1.QuestionUpdateInput)
], UpdateQuestionArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionWhereUniqueInput_1.QuestionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", QuestionWhereUniqueInput_1.QuestionWhereUniqueInput)
], UpdateQuestionArgs.prototype, "where", void 0);
UpdateQuestionArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateQuestionArgs);
exports.UpdateQuestionArgs = UpdateQuestionArgs;
