"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSaveArticleScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var UserSaveArticleScalarFieldEnum;
(function (UserSaveArticleScalarFieldEnum) {
    UserSaveArticleScalarFieldEnum["userId"] = "userId";
    UserSaveArticleScalarFieldEnum["articleId"] = "articleId";
    UserSaveArticleScalarFieldEnum["dateSaved"] = "dateSaved";
})(UserSaveArticleScalarFieldEnum = exports.UserSaveArticleScalarFieldEnum || (exports.UserSaveArticleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserSaveArticleScalarFieldEnum, {
    name: "UserSaveArticleScalarFieldEnum",
    description: undefined,
});
