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
exports.UserUpdateOneRequiredWithoutSurveysInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutSurveysInput_1 = require("../inputs/UserCreateOrConnectWithoutSurveysInput");
const UserCreateWithoutSurveysInput_1 = require("../inputs/UserCreateWithoutSurveysInput");
const UserUpdateWithoutSurveysInput_1 = require("../inputs/UserUpdateWithoutSurveysInput");
const UserUpsertWithoutSurveysInput_1 = require("../inputs/UserUpsertWithoutSurveysInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserUpdateOneRequiredWithoutSurveysInput = class UserUpdateOneRequiredWithoutSurveysInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSurveysInput_1.UserCreateWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutSurveysInput_1.UserCreateWithoutSurveysInput)
], UserUpdateOneRequiredWithoutSurveysInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSurveysInput_1.UserCreateOrConnectWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutSurveysInput_1.UserCreateOrConnectWithoutSurveysInput)
], UserUpdateOneRequiredWithoutSurveysInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpsertWithoutSurveysInput_1.UserUpsertWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpsertWithoutSurveysInput_1.UserUpsertWithoutSurveysInput)
], UserUpdateOneRequiredWithoutSurveysInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutSurveysInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutSurveysInput_1.UserUpdateWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateWithoutSurveysInput_1.UserUpdateWithoutSurveysInput)
], UserUpdateOneRequiredWithoutSurveysInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutSurveysInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpdateOneRequiredWithoutSurveysInput);
exports.UserUpdateOneRequiredWithoutSurveysInput = UserUpdateOneRequiredWithoutSurveysInput;
