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
exports.SurveyUpdateInput = void 0;
const TypeGraphQL = require("type-graphql");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutSurveysInput_1 = require("../inputs/UserUpdateOneRequiredWithoutSurveysInput");
let SurveyUpdateInput = class SurveyUpdateInput {
};
__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], SurveyUpdateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], SurveyUpdateInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], SurveyUpdateInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], SurveyUpdateInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSurveysInput_1.UserUpdateOneRequiredWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutSurveysInput_1.UserUpdateOneRequiredWithoutSurveysInput)
], SurveyUpdateInput.prototype, "User", void 0);
SurveyUpdateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SurveyUpdateInput);
exports.SurveyUpdateInput = SurveyUpdateInput;
