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
exports.SurveyUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyCreateOrConnectWithoutUserInput_1 = require("../inputs/SurveyCreateOrConnectWithoutUserInput");
const SurveyCreateWithoutUserInput_1 = require("../inputs/SurveyCreateWithoutUserInput");
const SurveyScalarWhereInput_1 = require("../inputs/SurveyScalarWhereInput");
const SurveyUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/SurveyUpdateManyWithWhereWithoutUserInput");
const SurveyUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/SurveyUpdateWithWhereUniqueWithoutUserInput");
const SurveyUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/SurveyUpsertWithWhereUniqueWithoutUserInput");
const SurveyWhereUniqueInput_1 = require("../inputs/SurveyWhereUniqueInput");
let SurveyUpdateManyWithoutUserInput = class SurveyUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [SurveyCreateWithoutUserInput_1.SurveyCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyCreateOrConnectWithoutUserInput_1.SurveyCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyUpsertWithWhereUniqueWithoutUserInput_1.SurveyUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereUniqueInput_1.SurveyWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereUniqueInput_1.SurveyWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereUniqueInput_1.SurveyWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyWhereUniqueInput_1.SurveyWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyUpdateWithWhereUniqueWithoutUserInput_1.SurveyUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyUpdateManyWithWhereWithoutUserInput_1.SurveyUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyScalarWhereInput_1.SurveyScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], SurveyUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
SurveyUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SurveyUpdateManyWithoutUserInput);
exports.SurveyUpdateManyWithoutUserInput = SurveyUpdateManyWithoutUserInput;
