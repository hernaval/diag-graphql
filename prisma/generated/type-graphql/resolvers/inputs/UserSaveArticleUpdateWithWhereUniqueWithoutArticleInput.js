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
exports.UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleUpdateWithoutArticleInput_1 = require("../inputs/UserSaveArticleUpdateWithoutArticleInput");
const UserSaveArticleWhereUniqueInput_1 = require("../inputs/UserSaveArticleWhereUniqueInput");
let UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput = class UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput)
], UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleUpdateWithoutArticleInput_1.UserSaveArticleUpdateWithoutArticleInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleUpdateWithoutArticleInput_1.UserSaveArticleUpdateWithoutArticleInput)
], UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput.prototype, "data", void 0);
UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput);
exports.UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput = UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput;
