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
exports.DimensionCreateOrConnectWithoutQuestionsInput = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCreateWithoutQuestionsInput_1 = require("../inputs/DimensionCreateWithoutQuestionsInput");
const DimensionWhereUniqueInput_1 = require("../inputs/DimensionWhereUniqueInput");
let DimensionCreateOrConnectWithoutQuestionsInput = class DimensionCreateOrConnectWithoutQuestionsInput {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereUniqueInput_1.DimensionWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionWhereUniqueInput_1.DimensionWhereUniqueInput)
], DimensionCreateOrConnectWithoutQuestionsInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionCreateWithoutQuestionsInput_1.DimensionCreateWithoutQuestionsInput, {
        nullable: false
    }),
    __metadata("design:type", DimensionCreateWithoutQuestionsInput_1.DimensionCreateWithoutQuestionsInput)
], DimensionCreateOrConnectWithoutQuestionsInput.prototype, "create", void 0);
DimensionCreateOrConnectWithoutQuestionsInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionCreateOrConnectWithoutQuestionsInput);
exports.DimensionCreateOrConnectWithoutQuestionsInput = DimensionCreateOrConnectWithoutQuestionsInput;
