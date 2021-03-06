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
exports.UserSaveArticleUpdateManyWithWhereWithoutArticleInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleScalarWhereInput_1 = require("../inputs/UserSaveArticleScalarWhereInput");
const UserSaveArticleUpdateManyMutationInput_1 = require("../inputs/UserSaveArticleUpdateManyMutationInput");
let UserSaveArticleUpdateManyWithWhereWithoutArticleInput = class UserSaveArticleUpdateManyWithWhereWithoutArticleInput {
};
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleScalarWhereInput_1.UserSaveArticleScalarWhereInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleScalarWhereInput_1.UserSaveArticleScalarWhereInput)
], UserSaveArticleUpdateManyWithWhereWithoutArticleInput.prototype, "where", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserSaveArticleUpdateManyMutationInput_1.UserSaveArticleUpdateManyMutationInput, {
        nullable: false
    }),
    __metadata("design:type", UserSaveArticleUpdateManyMutationInput_1.UserSaveArticleUpdateManyMutationInput)
], UserSaveArticleUpdateManyWithWhereWithoutArticleInput.prototype, "data", void 0);
UserSaveArticleUpdateManyWithWhereWithoutArticleInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateManyWithWhereWithoutArticleInput);
exports.UserSaveArticleUpdateManyWithWhereWithoutArticleInput = UserSaveArticleUpdateManyWithWhereWithoutArticleInput;
