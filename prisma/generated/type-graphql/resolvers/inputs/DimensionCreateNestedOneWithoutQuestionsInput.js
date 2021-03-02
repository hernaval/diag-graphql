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
exports.DimensionCreateNestedOneWithoutQuestionsInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateOrConnectWithoutQuestionsInput_1 = require("../inputs/DimensionCreateOrConnectWithoutQuestionsInput");
const DimensionCreateWithoutQuestionsInput_1 = require("../inputs/DimensionCreateWithoutQuestionsInput");
const DimensionWhereUniqueInput_1 = require("../inputs/DimensionWhereUniqueInput");
let DimensionCreateNestedOneWithoutQuestionsInput = class DimensionCreateNestedOneWithoutQuestionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateWithoutQuestionsInput_1.DimensionCreateWithoutQuestionsInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionCreateWithoutQuestionsInput_1.DimensionCreateWithoutQuestionsInput)
], DimensionCreateNestedOneWithoutQuestionsInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateOrConnectWithoutQuestionsInput_1.DimensionCreateOrConnectWithoutQuestionsInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionCreateOrConnectWithoutQuestionsInput_1.DimensionCreateOrConnectWithoutQuestionsInput)
], DimensionCreateNestedOneWithoutQuestionsInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereUniqueInput_1.DimensionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereUniqueInput_1.DimensionWhereUniqueInput)
], DimensionCreateNestedOneWithoutQuestionsInput.prototype, "connect", void 0);
DimensionCreateNestedOneWithoutQuestionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionCreateNestedOneWithoutQuestionsInput);
exports.DimensionCreateNestedOneWithoutQuestionsInput = DimensionCreateNestedOneWithoutQuestionsInput;
