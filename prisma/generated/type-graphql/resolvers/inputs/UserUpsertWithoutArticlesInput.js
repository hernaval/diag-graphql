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
exports.UserUpsertWithoutArticlesInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserCreateWithoutArticlesInput_1 = require("../inputs/UserCreateWithoutArticlesInput");
const UserUpdateWithoutArticlesInput_1 = require("../inputs/UserUpdateWithoutArticlesInput");
let UserUpsertWithoutArticlesInput = class UserUpsertWithoutArticlesInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserUpdateWithoutArticlesInput_1.UserUpdateWithoutArticlesInput, {
        nullable: false
    }),
    __metadata("design:type", UserUpdateWithoutArticlesInput_1.UserUpdateWithoutArticlesInput)
], UserUpsertWithoutArticlesInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserCreateWithoutArticlesInput_1.UserCreateWithoutArticlesInput, {
        nullable: false
    }),
    __metadata("design:type", UserCreateWithoutArticlesInput_1.UserCreateWithoutArticlesInput)
], UserUpsertWithoutArticlesInput.prototype, "create", void 0);
UserUpsertWithoutArticlesInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserUpsertWithoutArticlesInput);
exports.UserUpsertWithoutArticlesInput = UserUpsertWithoutArticlesInput;
