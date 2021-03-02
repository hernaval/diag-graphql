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
exports.QuizDimensionsArgs = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionOrderByInput_1 = require("../../../inputs/DimensionOrderByInput");
const DimensionWhereInput_1 = require("../../../inputs/DimensionWhereInput");
const DimensionWhereUniqueInput_1 = require("../../../inputs/DimensionWhereUniqueInput");
const DimensionScalarFieldEnum_1 = require("../../../../enums/DimensionScalarFieldEnum");
let QuizDimensionsArgs = class QuizDimensionsArgs {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereInput_1.DimensionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereInput_1.DimensionWhereInput)
], QuizDimensionsArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionOrderByInput_1.DimensionOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuizDimensionsArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereUniqueInput_1.DimensionWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereUniqueInput_1.DimensionWhereUniqueInput)
], QuizDimensionsArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], QuizDimensionsArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], QuizDimensionsArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [DimensionScalarFieldEnum_1.DimensionScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], QuizDimensionsArgs.prototype, "distinct", void 0);
QuizDimensionsArgs = __decorate([
    TypeGraphQL.ArgsType()
], QuizDimensionsArgs);
exports.QuizDimensionsArgs = QuizDimensionsArgs;
