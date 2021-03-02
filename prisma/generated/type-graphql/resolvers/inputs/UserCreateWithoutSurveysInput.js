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
exports.UserCreateWithoutSurveysInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleCreateNestedManyWithoutUserInput_1 = require("../inputs/UserSaveArticleCreateNestedManyWithoutUserInput");
let UserCreateWithoutSurveysInput = class UserCreateWithoutSurveysInput {
};
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "id", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "email", void 0);
__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    __metadata("design:type", Boolean)
], UserCreateWithoutSurveysInput.prototype, "emailConfirmed", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "passwordHash", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "username", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "firstName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "lastName", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "gender", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "function", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "organisation", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "category", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "companySize", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "activity", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "country", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "phone", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "status", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "role", void 0);
__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    __metadata("design:type", String)
], UserCreateWithoutSurveysInput.prototype, "forgotToken", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutSurveysInput.prototype, "createdDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], UserCreateWithoutSurveysInput.prototype, "updatedDate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleCreateNestedManyWithoutUserInput_1.UserSaveArticleCreateNestedManyWithoutUserInput, {
        nullable: true
    }),
    __metadata("design:type", UserSaveArticleCreateNestedManyWithoutUserInput_1.UserSaveArticleCreateNestedManyWithoutUserInput)
], UserCreateWithoutSurveysInput.prototype, "Articles", void 0);
UserCreateWithoutSurveysInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateWithoutSurveysInput);
exports.UserCreateWithoutSurveysInput = UserCreateWithoutSurveysInput;
