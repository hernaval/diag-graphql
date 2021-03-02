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
exports.DimensionListRelationFilter = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionWhereInput_1 = require("../inputs/DimensionWhereInput");
let DimensionListRelationFilter = class DimensionListRelationFilter {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereInput_1.DimensionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereInput_1.DimensionWhereInput)
], DimensionListRelationFilter.prototype, "every", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereInput_1.DimensionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereInput_1.DimensionWhereInput)
], DimensionListRelationFilter.prototype, "some", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionWhereInput_1.DimensionWhereInput, {
        nullable: true
    }),
    __metadata("design:type", DimensionWhereInput_1.DimensionWhereInput)
], DimensionListRelationFilter.prototype, "none", void 0);
DimensionListRelationFilter = __decorate([
    TypeGraphQL.InputType({
        isAbstract: true
    })
], DimensionListRelationFilter);
exports.DimensionListRelationFilter = DimensionListRelationFilter;
