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
exports.UserCreateWithoutArticlesInput = void 0;
const TypeGraphQL = require("type-graphql");
const SurveyCreateNestedManyWithoutUserInput_1 = require("../inputs/SurveyCreateNestedManyWithoutUserInput");
let UserCreateWithoutArticlesInput = class UserCreateWithoutArticlesInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserCreateWithoutArticlesInput.prototype, "emailConfirmed", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "passwordHash", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "function", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "organisation", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "category", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "companySize", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutArticlesInput.prototype, "forgotToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutArticlesInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutArticlesInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => SurveyCreateNestedManyWithoutUserInput_1.SurveyCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", SurveyCreateNestedManyWithoutUserInput_1.SurveyCreateNestedManyWithoutUserInput)
], UserCreateWithoutArticlesInput.prototype, "Surveys", void 0);
UserCreateWithoutArticlesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutArticlesInput);
exports.UserCreateWithoutArticlesInput = UserCreateWithoutArticlesInput;
