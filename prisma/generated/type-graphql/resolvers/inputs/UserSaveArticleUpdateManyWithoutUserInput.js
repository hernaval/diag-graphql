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
exports.UserSaveArticleUpdateManyWithoutUserInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleCreateOrConnectWithoutUserInput_1 = require("../inputs/UserSaveArticleCreateOrConnectWithoutUserInput");
const UserSaveArticleCreateWithoutUserInput_1 = require("../inputs/UserSaveArticleCreateWithoutUserInput");
const UserSaveArticleScalarWhereInput_1 = require("../inputs/UserSaveArticleScalarWhereInput");
const UserSaveArticleUpdateManyWithWhereWithoutUserInput_1 = require("../inputs/UserSaveArticleUpdateManyWithWhereWithoutUserInput");
const UserSaveArticleUpdateWithWhereUniqueWithoutUserInput_1 = require("../inputs/UserSaveArticleUpdateWithWhereUniqueWithoutUserInput");
const UserSaveArticleUpsertWithWhereUniqueWithoutUserInput_1 = require("../inputs/UserSaveArticleUpsertWithWhereUniqueWithoutUserInput");
const UserSaveArticleWhereUniqueInput_1 = require("../inputs/UserSaveArticleWhereUniqueInput");
let UserSaveArticleUpdateManyWithoutUserInput = class UserSaveArticleUpdateManyWithoutUserInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateWithoutUserInput_1.UserSaveArticleCreateWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateOrConnectWithoutUserInput_1.UserSaveArticleCreateOrConnectWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpsertWithWhereUniqueWithoutUserInput_1.UserSaveArticleUpsertWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpdateWithWhereUniqueWithoutUserInput_1.UserSaveArticleUpdateWithWhereUniqueWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpdateManyWithWhereWithoutUserInput_1.UserSaveArticleUpdateManyWithWhereWithoutUserInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarWhereInput_1.UserSaveArticleScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutUserInput.prototype, "deleteMany", void 0);
UserSaveArticleUpdateManyWithoutUserInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateManyWithoutUserInput);
exports.UserSaveArticleUpdateManyWithoutUserInput = UserSaveArticleUpdateManyWithoutUserInput;
