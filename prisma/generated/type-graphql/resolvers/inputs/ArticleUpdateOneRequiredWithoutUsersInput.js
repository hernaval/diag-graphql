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
exports.ArticleUpdateOneRequiredWithoutUsersInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleCreateOrConnectWithoutUsersInput_1 = require("../inputs/ArticleCreateOrConnectWithoutUsersInput");
const ArticleCreateWithoutUsersInput_1 = require("../inputs/ArticleCreateWithoutUsersInput");
const ArticleUpdateWithoutUsersInput_1 = require("../inputs/ArticleUpdateWithoutUsersInput");
const ArticleUpsertWithoutUsersInput_1 = require("../inputs/ArticleUpsertWithoutUsersInput");
const ArticleWhereUniqueInput_1 = require("../inputs/ArticleWhereUniqueInput");
let ArticleUpdateOneRequiredWithoutUsersInput = class ArticleUpdateOneRequiredWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateWithoutUsersInput_1.ArticleCreateWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleCreateWithoutUsersInput_1.ArticleCreateWithoutUsersInput)
], ArticleUpdateOneRequiredWithoutUsersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateOrConnectWithoutUsersInput_1.ArticleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleCreateOrConnectWithoutUsersInput_1.ArticleCreateOrConnectWithoutUsersInput)
], ArticleUpdateOneRequiredWithoutUsersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleUpsertWithoutUsersInput_1.ArticleUpsertWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleUpsertWithoutUsersInput_1.ArticleUpsertWithoutUsersInput)
], ArticleUpdateOneRequiredWithoutUsersInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereUniqueInput_1.ArticleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleWhereUniqueInput_1.ArticleWhereUniqueInput)
], ArticleUpdateOneRequiredWithoutUsersInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleUpdateWithoutUsersInput_1.ArticleUpdateWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleUpdateWithoutUsersInput_1.ArticleUpdateWithoutUsersInput)
], ArticleUpdateOneRequiredWithoutUsersInput.prototype, "update", void 0);
ArticleUpdateOneRequiredWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ArticleUpdateOneRequiredWithoutUsersInput);
exports.ArticleUpdateOneRequiredWithoutUsersInput = ArticleUpdateOneRequiredWithoutUsersInput;
