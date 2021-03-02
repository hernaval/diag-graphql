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
exports.UserSurveysArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyOrderByInput_1 = require("../../../inputs/SurveyOrderByInput");
const SurveyWhereInput_1 = require("../../../inputs/SurveyWhereInput");
const SurveyWhereUniqueInput_1 = require("../../../inputs/SurveyWhereUniqueInput");
const SurveyScalarFieldEnum_1 = require("../../../../enums/SurveyScalarFieldEnum");
let UserSurveysArgs = class UserSurveysArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SurveyWhereInput_1.SurveyWhereInput, {
        nullable: true
    }),
    __metadata("design:type", SurveyWhereInput_1.SurveyWhereInput)
], UserSurveysArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyOrderByInput_1.SurveyOrderByInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSurveysArgs.prototype, "orderBy", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyWhereUniqueInput_1.SurveyWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", SurveyWhereUniqueInput_1.SurveyWhereUniqueInput)
], UserSurveysArgs.prototype, "cursor", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserSurveysArgs.prototype, "take", void 0);
__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    __metadata("design:type", Number)
], UserSurveysArgs.prototype, "skip", void 0);
__decorate([
    TypeGraphQL.Field(_type => [SurveyScalarFieldEnum_1.SurveyScalarFieldEnum], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSurveysArgs.prototype, "distinct", void 0);
UserSurveysArgs = __decorate([
    TypeGraphQL.ArgsType()
], UserSurveysArgs);
exports.UserSurveysArgs = UserSurveysArgs;
