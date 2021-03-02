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
exports.UserCreateNestedOneWithoutSurveysInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutSurveysInput_1 = require("../inputs/UserCreateOrConnectWithoutSurveysInput");
const UserCreateWithoutSurveysInput_1 = require("../inputs/UserCreateWithoutSurveysInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutSurveysInput = class UserCreateNestedOneWithoutSurveysInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutSurveysInput_1.UserCreateWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutSurveysInput_1.UserCreateWithoutSurveysInput)
], UserCreateNestedOneWithoutSurveysInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSurveysInput_1.UserCreateOrConnectWithoutSurveysInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutSurveysInput_1.UserCreateOrConnectWithoutSurveysInput)
], UserCreateNestedOneWithoutSurveysInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutSurveysInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutSurveysInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateNestedOneWithoutSurveysInput);
exports.UserCreateNestedOneWithoutSurveysInput = UserCreateNestedOneWithoutSurveysInput;
