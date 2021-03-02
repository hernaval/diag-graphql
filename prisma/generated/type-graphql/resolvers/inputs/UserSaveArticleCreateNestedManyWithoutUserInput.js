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
exports.UserSaveArticleCreateNestedManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleCreateOrConnectWithoutUserInput_1 = require("../inputs/UserSaveArticleCreateOrConnectWithoutUserInput");
const UserSaveArticleCreateWithoutUserInput_1 = require("../inputs/UserSaveArticleCreateWithoutUserInput");
const UserSaveArticleWhereUniqueInput_1 = require("../inputs/UserSaveArticleWhereUniqueInput");
let UserSaveArticleCreateNestedManyWithoutUserInput = class UserSaveArticleCreateNestedManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateWithoutUserInput_1.UserSaveArticleCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleCreateNestedManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateOrConnectWithoutUserInput_1.UserSaveArticleCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleCreateNestedManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleCreateNestedManyWithoutUserInput.prototype, "connect", void 0);
UserSaveArticleCreateNestedManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleCreateNestedManyWithoutUserInput);
exports.UserSaveArticleCreateNestedManyWithoutUserInput = UserSaveArticleCreateNestedManyWithoutUserInput;
