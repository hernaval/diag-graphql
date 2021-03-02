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
exports.UpdateManyQuizArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuizUpdateManyMutationInput_1 = require("../../../inputs/QuizUpdateManyMutationInput");
const QuizWhereInput_1 = require("../../../inputs/QuizWhereInput");
let UpdateManyQuizArgs = class UpdateManyQuizArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateManyMutationInput_1.QuizUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", QuizUpdateManyMutationInput_1.QuizUpdateManyMutationInput)
], UpdateManyQuizArgs.prototype, "data", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizWhereInput_1.QuizWhereInput, {
        nullable: true
    }),
    __metadata("design:type", QuizWhereInput_1.QuizWhereInput)
], UpdateManyQuizArgs.prototype, "where", void 0);
UpdateManyQuizArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpdateManyQuizArgs);
exports.UpdateManyQuizArgs = UpdateManyQuizArgs;
