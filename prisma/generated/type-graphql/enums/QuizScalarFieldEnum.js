"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var QuizScalarFieldEnum;
(function (QuizScalarFieldEnum) {
    QuizScalarFieldEnum["id"] = "id";
    QuizScalarFieldEnum["name"] = "name";
    QuizScalarFieldEnum["createdDate"] = "createdDate";
    QuizScalarFieldEnum["updatedDate"] = "updatedDate";
})(QuizScalarFieldEnum = exports.QuizScalarFieldEnum || (exports.QuizScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(QuizScalarFieldEnum, {
    name: "QuizScalarFieldEnum",
    description: undefined,
});
