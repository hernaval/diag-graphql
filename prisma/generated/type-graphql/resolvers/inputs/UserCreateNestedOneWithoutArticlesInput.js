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
exports.UserCreateNestedOneWithoutArticlesInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateOrConnectWithoutArticlesInput_1 = require("../inputs/UserCreateOrConnectWithoutArticlesInput");
const UserCreateWithoutArticlesInput_1 = require("../inputs/UserCreateWithoutArticlesInput");
const UserWhereUniqueInput_1 = require("../inputs/UserWhereUniqueInput");
let UserCreateNestedOneWithoutArticlesInput = class UserCreateNestedOneWithoutArticlesInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutArticlesInput_1.UserCreateWithoutArticlesInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateWithoutArticlesInput_1.UserCreateWithoutArticlesInput)
], UserCreateNestedOneWithoutArticlesInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateOrConnectWithoutArticlesInput_1.UserCreateOrConnectWithoutArticlesInput, {
        nullable: true
    }),
    __metadata("design:type", UserCreateOrConnectWithoutArticlesInput_1.UserCreateOrConnectWithoutArticlesInput)
], UserCreateNestedOneWithoutArticlesInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UserCreateNestedOneWithoutArticlesInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutArticlesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserCreateNestedOneWithoutArticlesInput);
exports.UserCreateNestedOneWithoutArticlesInput = UserCreateNestedOneWithoutArticlesInput;
