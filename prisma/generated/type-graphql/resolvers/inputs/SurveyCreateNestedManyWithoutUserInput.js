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
exports.SurveyCreateNestedManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyCreateOrConnectWithoutUserInput_1 = require("../inputs/SurveyCreateOrConnectWithoutUserInput");
const SurveyCreateWithoutUserInput_1 = require("../inputs/SurveyCreateWithoutUserInput");
const SurveyWhereUniqueInput_1 = require("../inputs/SurveyWhereUniqueInput");
let SurveyCreateNestedManyWithoutUserInput = class SurveyCreateNestedManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SurveyCreateWithoutUserInput_1.SurveyCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyCreateOrConnectWithoutUserInput_1.SurveyCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereUniqueInput_1.SurveyWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
SurveyCreateNestedManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SurveyCreateNestedManyWithoutUserInput);
exports.SurveyCreateNestedManyWithoutUserInput = SurveyCreateNestedManyWithoutUserInput;
