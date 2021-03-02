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
exports.UpsertSurveyArgs = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyCreateInput_1 = require("../../../inputs/SurveyCreateInput");
const SurveyUpdateInput_1 = require("../../../inputs/SurveyUpdateInput");
const SurveyWhereUniqueInput_1 = require("../../../inputs/SurveyWhereUniqueInput");
let UpsertSurveyArgs = class UpsertSurveyArgs {
};
__decorate([
    TypeGraphQL.Field(_type => SurveyWhereUniqueInput_1.SurveyWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", SurveyWhereUniqueInput_1.SurveyWhereUniqueInput)
], UpsertSurveyArgs.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyCreateInput_1.SurveyCreateInput, {
        nullable: false
    }),
    __metadata("design:type", SurveyCreateInput_1.SurveyCreateInput)
], UpsertSurveyArgs.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyUpdateInput_1.SurveyUpdateInput, {
        nullable: false
    }),
    __metadata("design:type", SurveyUpdateInput_1.SurveyUpdateInput)
], UpsertSurveyArgs.prototype, "update", void 0);
UpsertSurveyArgs = __decorate([
    TypeGraphQL.ArgsType()
], UpsertSurveyArgs);
exports.UpsertSurveyArgs = UpsertSurveyArgs;
