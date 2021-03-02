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
exports.DimensionUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const QuestionUpdateManyWithoutDimensionInput_1 = require("../inputs/QuestionUpdateManyWithoutDimensionInput");
const QuizUpdateOneRequiredWithoutDimensionsInput_1 = require("../inputs/QuizUpdateOneRequiredWithoutDimensionsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let DimensionUpdateInput = class DimensionUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DimensionUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], DimensionUpdateInput.prototype, "name", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], DimensionUpdateInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], DimensionUpdateInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuestionUpdateManyWithoutDimensionInput_1.QuestionUpdateManyWithoutDimensionInput, {
        nullable: true
    }),
    __metadata("design:type", QuestionUpdateManyWithoutDimensionInput_1.QuestionUpdateManyWithoutDimensionInput)
], DimensionUpdateInput.prototype, "Questions", void 0);
__decorate([
    TypeGraphQL.Field(_type => QuizUpdateOneRequiredWithoutDimensionsInput_1.QuizUpdateOneRequiredWithoutDimensionsInput, {
        nullable: true
    }),
    __metadata("design:type", QuizUpdateOneRequiredWithoutDimensionsInput_1.QuizUpdateOneRequiredWithoutDimensionsInput)
], DimensionUpdateInput.prototype, "Quiz", void 0);
DimensionUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionUpdateInput);
exports.DimensionUpdateInput = DimensionUpdateInput;
