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
exports.QuestionCreateNestedManyWithoutDimensionInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionCreateOrConnectWithoutDimensionInput_1 = require("../inputs/QuestionCreateOrConnectWithoutDimensionInput");
const QuestionCreateWithoutDimensionInput_1 = require("../inputs/QuestionCreateWithoutDimensionInput");
const QuestionWhereUniqueInput_1 = require("../inputs/QuestionWhereUniqueInput");
let QuestionCreateNestedManyWithoutDimensionInput = class QuestionCreateNestedManyWithoutDimensionInput {
};
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateWithoutDimensionInput_1.QuestionCreateWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutDimensionInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutDimensionInput_1.QuestionCreateOrConnectWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutDimensionInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionCreateNestedManyWithoutDimensionInput.prototype, "connect", void 0);
QuestionCreateNestedManyWithoutDimensionInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionCreateNestedManyWithoutDimensionInput);
exports.QuestionCreateNestedManyWithoutDimensionInput = QuestionCreateNestedManyWithoutDimensionInput;
