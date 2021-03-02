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
exports.QuestionUpdateManyWithoutDimensionInput = void 0;
const TypeGraphQL = require("type-graphql");
const QuestionCreateOrConnectWithoutDimensionInput_1 = require("../inputs/QuestionCreateOrConnectWithoutDimensionInput");
const QuestionCreateWithoutDimensionInput_1 = require("../inputs/QuestionCreateWithoutDimensionInput");
const QuestionScalarWhereInput_1 = require("../inputs/QuestionScalarWhereInput");
const QuestionUpdateManyWithWhereWithoutDimensionInput_1 = require("../inputs/QuestionUpdateManyWithWhereWithoutDimensionInput");
const QuestionUpdateWithWhereUniqueWithoutDimensionInput_1 = require("../inputs/QuestionUpdateWithWhereUniqueWithoutDimensionInput");
const QuestionUpsertWithWhereUniqueWithoutDimensionInput_1 = require("../inputs/QuestionUpsertWithWhereUniqueWithoutDimensionInput");
const QuestionWhereUniqueInput_1 = require("../inputs/QuestionWhereUniqueInput");
let QuestionUpdateManyWithoutDimensionInput = class QuestionUpdateManyWithoutDimensionInput {
};
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateWithoutDimensionInput_1.QuestionCreateWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutDimensionInput_1.QuestionCreateOrConnectWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionUpsertWithWhereUniqueWithoutDimensionInput_1.QuestionUpsertWithWhereUniqueWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionWhereUniqueInput_1.QuestionWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionUpdateWithWhereUniqueWithoutDimensionInput_1.QuestionUpdateWithWhereUniqueWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionUpdateManyWithWhereWithoutDimensionInput_1.QuestionUpdateManyWithWhereWithoutDimensionInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [QuestionScalarWhereInput_1.QuestionScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuestionUpdateManyWithoutDimensionInput.prototype, "deleteMany", void 0);
QuestionUpdateManyWithoutDimensionInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], QuestionUpdateManyWithoutDimensionInput);
exports.QuestionUpdateManyWithoutDimensionInput = QuestionUpdateManyWithoutDimensionInput;
