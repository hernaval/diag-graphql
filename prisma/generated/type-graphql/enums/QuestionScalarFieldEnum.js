"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var QuestionScalarFieldEnum;
(function (QuestionScalarFieldEnum) {
    QuestionScalarFieldEnum["id"] = "id";
    QuestionScalarFieldEnum["sentence"] = "sentence";
    QuestionScalarFieldEnum["createdDate"] = "createdDate";
    QuestionScalarFieldEnum["updatedDate"] = "updatedDate";
    QuestionScalarFieldEnum["dimensionId"] = "dimensionId";
})(QuestionScalarFieldEnum = exports.QuestionScalarFieldEnum || (exports.QuestionScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QuestionScalarFieldEnum, {
    name: "QuestionScalarFieldEnum",
    description: undefined,
});
