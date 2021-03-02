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
exports.UserSaveArticleUpdateWithoutArticleInput = void 0;
const TypeGraphQL = require("type-graphql");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutArticlesInput_1 = require("../inputs/UserUpdateOneRequiredWithoutArticlesInput");
let UserSaveArticleUpdateWithoutArticleInput = class UserSaveArticleUpdateWithoutArticleInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserSaveArticleUpdateWithoutArticleInput.prototype, "dateSaved", void 0);
__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutArticlesInput_1.UserUpdateOneRequiredWithoutArticlesInput, {
        nullable: true
    }),
    __metadata("design:type", UserUpdateOneRequiredWithoutArticlesInput_1.UserUpdateOneRequiredWithoutArticlesInput)
], UserSaveArticleUpdateWithoutArticleInput.prototype, "User", void 0);
UserSaveArticleUpdateWithoutArticleInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateWithoutArticleInput);
exports.UserSaveArticleUpdateWithoutArticleInput = UserSaveArticleUpdateWithoutArticleInput;
