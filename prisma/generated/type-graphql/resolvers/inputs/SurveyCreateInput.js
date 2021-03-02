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
exports.SurveyCreateInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateNestedOneWithoutSurveysInput_1 = require("../inputs/UserCreateNestedOneWithoutSurveysInput");
let SurveyCreateInput = class SurveyCreateInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], SurveyCreateInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    __metadata("design:type", Number)
], SurveyCreateInput.prototype, "value", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SurveyCreateInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], SurveyCreateInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSurveysInput_1.UserCreateNestedOneWithoutSurveysInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateNestedOneWithoutSurveysInput_1.UserCreateNestedOneWithoutSurveysInput)
], SurveyCreateInput.prototype, "User", void 0);
SurveyCreateInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], SurveyCreateInput);
exports.SurveyCreateInput = SurveyCreateInput;
