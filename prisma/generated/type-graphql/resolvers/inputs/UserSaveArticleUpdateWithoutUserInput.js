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
exports.UserSaveArticleUpdateWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleUpdateOneRequiredWithoutUsersInput_1 = require("../inputs/ArticleUpdateOneRequiredWithoutUsersInput");
const NullableDateTimeFieldUpdateOperationsInput_1 = require("../inputs/NullableDateTimeFieldUpdateOperationsInput");
let UserSaveArticleUpdateWithoutUserInput = class UserSaveArticleUpdateWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    __metadata("design:type", NullableDateTimeFieldUpdateOperationsInput_1.NullableDateTimeFieldUpdateOperationsInput)
], UserSaveArticleUpdateWithoutUserInput.prototype, "dateSaved", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleUpdateOneRequiredWithoutUsersInput_1.ArticleUpdateOneRequiredWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleUpdateOneRequiredWithoutUsersInput_1.ArticleUpdateOneRequiredWithoutUsersInput)
], UserSaveArticleUpdateWithoutUserInput.prototype, "Article", void 0);
UserSaveArticleUpdateWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateWithoutUserInput);
exports.UserSaveArticleUpdateWithoutUserInput = UserSaveArticleUpdateWithoutUserInput;
