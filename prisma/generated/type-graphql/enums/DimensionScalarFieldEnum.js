"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DimensionScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var DimensionScalarFieldEnum;
(function (DimensionScalarFieldEnum) {
    DimensionScalarFieldEnum["id"] = "id";
    DimensionScalarFieldEnum["name"] = "name";
    DimensionScalarFieldEnum["createdDate"] = "createdDate";
    DimensionScalarFieldEnum["updatedDate"] = "updatedDate";
    DimensionScalarFieldEnum["quizId"] = "quizId";
})(DimensionScalarFieldEnum = exports.DimensionScalarFieldEnum || (exports.DimensionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(DimensionScalarFieldEnum, {
    name: "DimensionScalarFieldEnum",
    description: undefined,
});
