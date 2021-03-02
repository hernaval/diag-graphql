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
exports.AggregateDimension = void 0;
const TypeGraphQL = require("type-graphql");
const DimensionCountAggregate_1 = require("../outputs/DimensionCountAggregate");
const DimensionMaxAggregate_1 = require("../outputs/DimensionMaxAggregate");
const DimensionMinAggregate_1 = require("../outputs/DimensionMinAggregate");
let AggregateDimension = class AggregateDimension {
};
__decorate([
    TypeGraphQL.Field(_type => DimensionCountAggregate_1.DimensionCountAggregate, {
        nullable: true
    }),
    __metadata("design:type", DimensionCountAggregate_1.DimensionCountAggregate)
], AggregateDimension.prototype, "count", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionMinAggregate_1.DimensionMinAggregate, {
        nullable: true
    }),
    __metadata("design:type", DimensionMinAggregate_1.DimensionMinAggregate)
], AggregateDimension.prototype, "min", void 0);
__decorate([
    TypeGraphQL.Field(_type => DimensionMaxAggregate_1.DimensionMaxAggregate, {
        nullable: true
    }),
    __metadata("design:type", DimensionMaxAggregate_1.DimensionMaxAggregate)
], AggregateDimension.prototype, "max", void 0);
AggregateDimension = __decorate([
    TypeGraphQL.ObjectType({
        isAbstract: true
    })
], AggregateDimension);
exports.AggregateDimension = AggregateDimension;
