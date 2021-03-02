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
exports.ArticleCreateNestedOneWithoutUsersInput = void 0;
const TypeGraphQL = require("type-graphql");
const ArticleCreateOrConnectWithoutUsersInput_1 = require("../inputs/ArticleCreateOrConnectWithoutUsersInput");
const ArticleCreateWithoutUsersInput_1 = require("../inputs/ArticleCreateWithoutUsersInput");
const ArticleWhereUniqueInput_1 = require("../inputs/ArticleWhereUniqueInput");
let ArticleCreateNestedOneWithoutUsersInput = class ArticleCreateNestedOneWithoutUsersInput {
};
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateWithoutUsersInput_1.ArticleCreateWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleCreateWithoutUsersInput_1.ArticleCreateWithoutUsersInput)
], ArticleCreateNestedOneWithoutUsersInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleCreateOrConnectWithoutUsersInput_1.ArticleCreateOrConnectWithoutUsersInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleCreateOrConnectWithoutUsersInput_1.ArticleCreateOrConnectWithoutUsersInput)
], ArticleCreateNestedOneWithoutUsersInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => ArticleWhereUniqueInput_1.ArticleWhereUniqueInput, {
        nullable: true
    }),
    __metadata("design:type", ArticleWhereUniqueInput_1.ArticleWhereUniqueInput)
], ArticleCreateNestedOneWithoutUsersInput.prototype, "connect", void 0);
ArticleCreateNestedOneWithoutUsersInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], ArticleCreateNestedOneWithoutUsersInput);
exports.ArticleCreateNestedOneWithoutUsersInput = ArticleCreateNestedOneWithoutUsersInput;
