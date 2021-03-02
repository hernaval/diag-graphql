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
exports.QuizUpdateOneRequiredWithoutDimensionsInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuizCreateOrConnectWithoutDimensionsInput_1 = require("../inputs/QuizCreateOrConnectWithoutDimensionsInput");
const QuizCreateWithoutDimensionsInput_1 = require("../inputs/QuizCreateWithoutDimensionsInput");
const QuizUpdateWithoutDimensionsInput_1 = require("../inputs/QuizUpdateWithoutDimensionsInput");
const QuizUpsertWithoutDimensionsInput_1 = require("../inputs/QuizUpsertWithoutDimensionsInput");
const QuizWhereUniqueInput_1 = require("../inputs/QuizWhereUniqueInput");
let QuizUpdateOneRequiredWithoutDimensionsInput = class QuizUpdateOneRequiredWithoutDimensionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => QuizCreateWithoutDimensionsInput_1.QuizCreateWithoutDimensionsInput, {
        nullable: true
    }),
    __metadata("design:type", QuizCreateWithoutDimensionsInput_1.QuizCreateWithoutDimensionsInput)
], QuizUpdateOneRequiredWithoutDimensionsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizCreateOrConnectWithoutDimensionsInput_1.QuizCreateOrConnectWithoutDimensionsInput, {
        nullable: true
    }),
    __metadata("design:type", QuizCreateOrConnectWithoutDimensionsInput_1.QuizCreateOrConnectWithoutDimensionsInput)
], QuizUpdateOneRequiredWithoutDimensionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizUpsertWithoutDimensionsInput_1.QuizUpsertWithoutDimensionsInput, {
        nullable: true
    }),
    __metadata("design:type", QuizUpsertWithoutDimensionsInput_1.QuizUpsertWithoutDimensionsInput)
], QuizUpdateOneRequiredWithoutDimensionsInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizWhereUniqueInput_1.QuizWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", QuizWhereUniqueInput_1.QuizWhereUniqueInput)
], QuizUpdateOneRequiredWithoutDimensionsInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateWithoutDimensionsInput_1.QuizUpdateWithoutDimensionsInput, {
        nullable: true
    }),
    __metadata("design:type", QuizUpdateWithoutDimensionsInput_1.QuizUpdateWithoutDimensionsInput)
], QuizUpdateOneRequiredWithoutDimensionsInput.prototype, "update", void 0);
QuizUpdateOneRequiredWithoutDimensionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuizUpdateOneRequiredWithoutDimensionsInput);
exports.QuizUpdateOneRequiredWithoutDimensionsInput = QuizUpdateOneRequiredWithoutDimensionsInput;
