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
var NestedDateTimeNullableFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedDateTimeNullableFilter = void 0;
const TypeGraphQL = require("type-graphql");
let NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = class NestedDateTimeNullableFilter {
};
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedDateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    TypeGraphQL.Field(_type => [Date], {
        nullable: true
    }),
    __metadata("design:type", Array)
], NestedDateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    __metadata("design:type", Date)
], NestedDateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    TypeGraphQL.Field(_type => NestedDateTimeNullableFilter_1, {
        nullable: true
    }),
    __metadata("design:type", NestedDateTimeNullableFilter)
], NestedDateTimeNullableFilter.prototype, "not", void 0);
NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], NestedDateTimeNullableFilter);
exports.NestedDateTimeNullableFilter = NestedDateTimeNullableFilter;
