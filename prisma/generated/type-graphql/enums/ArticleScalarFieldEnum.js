"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var ArticleScalarFieldEnum;
(function (ArticleScalarFieldEnum) {
    ArticleScalarFieldEnum["id"] = "id";
    ArticleScalarFieldEnum["title"] = "title";
    ArticleScalarFieldEnum["imageUrl"] = "imageUrl";
    ArticleScalarFieldEnum["text"] = "text";
    ArticleScalarFieldEnum["author"] = "author";
    ArticleScalarFieldEnum["createdDate"] = "createdDate";
    ArticleScalarFieldEnum["updatedDate"] = "updatedDate";
})(ArticleScalarFieldEnum = exports.ArticleScalarFieldEnum || (exports.ArticleScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ArticleScalarFieldEnum, {
    name: "ArticleScalarFieldEnum",
    description: undefined,
});
