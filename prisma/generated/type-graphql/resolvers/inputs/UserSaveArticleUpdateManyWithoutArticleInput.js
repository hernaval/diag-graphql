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
exports.UserSaveArticleUpdateManyWithoutArticleInput = void 0;
const TypeGraphQL = require("type-graphql");
const UserSaveArticleCreateOrConnectWithoutArticleInput_1 = require("../inputs/UserSaveArticleCreateOrConnectWithoutArticleInput");
const UserSaveArticleCreateWithoutArticleInput_1 = require("../inputs/UserSaveArticleCreateWithoutArticleInput");
const UserSaveArticleScalarWhereInput_1 = require("../inputs/UserSaveArticleScalarWhereInput");
const UserSaveArticleUpdateManyWithWhereWithoutArticleInput_1 = require("../inputs/UserSaveArticleUpdateManyWithWhereWithoutArticleInput");
const UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput_1 = require("../inputs/UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput");
const UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput_1 = require("../inputs/UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput");
const UserSaveArticleWhereUniqueInput_1 = require("../inputs/UserSaveArticleWhereUniqueInput");
let UserSaveArticleUpdateManyWithoutArticleInput = class UserSaveArticleUpdateManyWithoutArticleInput {
};
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateWithoutArticleInput_1.UserSaveArticleCreateWithoutArticleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "create", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleCreateOrConnectWithoutArticleInput_1.UserSaveArticleCreateOrConnectWithoutArticleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "connectOrCreate", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput_1.UserSaveArticleUpsertWithWhereUniqueWithoutArticleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "upsert", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "connect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "set", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "disconnect", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleWhereUniqueInput_1.UserSaveArticleWhereUniqueInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "delete", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput_1.UserSaveArticleUpdateWithWhereUniqueWithoutArticleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "update", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleUpdateManyWithWhereWithoutArticleInput_1.UserSaveArticleUpdateManyWithWhereWithoutArticleInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "updateMany", void 0);
__decorate([
    TypeGraphQL.Field(_type => [UserSaveArticleScalarWhereInput_1.UserSaveArticleScalarWhereInput], {
        nullable: true
    }),
    __metadata("design:type", Array)
], UserSaveArticleUpdateManyWithoutArticleInput.prototype, "deleteMany", void 0);
UserSaveArticleUpdateManyWithoutArticleInput = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], UserSaveArticleUpdateManyWithoutArticleInput);
exports.UserSaveArticleUpdateManyWithoutArticleInput = UserSaveArticleUpdateManyWithoutArticleInput;
