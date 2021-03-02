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
exports.DeleteManyQuizArgs = void 0;
const TypeGraphQL = require("type-graphql");
const QuizWhereInput_1 = require("../../../inputs/QuizWhereInput");
let DeleteManyQuizArgs = class DeleteManyQuizArgs {
};
__decorate([
    TypeGraphQL.Field(_type => QuizWhereInput_1.QuizWhereInput, {
        nullable: true
    }),
    __metadata("design:type", QuizWhereInput_1.QuizWhereInput)
], DeleteManyQuizArgs.prototype, "where", void 0);
DeleteManyQuizArgs = __decorate([
    TypeGraphQL.ArgsType()
], DeleteManyQuizArgs);
exports.DeleteManyQuizArgs = DeleteManyQuizArgs;
