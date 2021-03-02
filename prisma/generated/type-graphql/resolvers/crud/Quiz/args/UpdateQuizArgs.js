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
exports.UpdateQuizArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuizUpdateInput_1 = require("../../../inputs/QuizUpdateInput");
const QuizWhereUniqueInput_1 = require("../../../inputs/QuizWhereUniqueInput");
let UpdateQuizArgs = class UpdateQuizArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateInput_1.QuizUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", QuizUpdateInput_1.QuizUpdateInput)
], UpdateQuizArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizWhereUniqueInput_1.QuizWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", QuizWhereUniqueInput_1.QuizWhereUniqueInput)
], UpdateQuizArgs.prototype, "where", void 0);
UpdateQuizArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateQuizArgs);
exports.UpdateQuizArgs = UpdateQuizArgs;
