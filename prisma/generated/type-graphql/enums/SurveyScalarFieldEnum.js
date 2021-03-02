"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var SurveyScalarFieldEnum;
(function (SurveyScalarFieldEnum) {
    SurveyScalarFieldEnum["id"] = "id";
    SurveyScalarFieldEnum["value"] = "value";
    SurveyScalarFieldEnum["createdDate"] = "createdDate";
    SurveyScalarFieldEnum["updatedDate"] = "updatedDate";
    SurveyScalarFieldEnum["userId"] = "userId";
})(SurveyScalarFieldEnum = exports.SurveyScalarFieldEnum || (exports.SurveyScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(SurveyScalarFieldEnum, {
    name: "SurveyScalarFieldEnum",
    description: undefined,
});
