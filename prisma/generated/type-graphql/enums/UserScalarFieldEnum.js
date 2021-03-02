"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const TypeGraphQL = require("type-graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["emailConfirmed"] = "emailConfirmed";
    UserScalarFieldEnum["passwordHash"] = "passwordHash";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["firstName"] = "firstName";
    UserScalarFieldEnum["lastName"] = "lastName";
    UserScalarFieldEnum["gender"] = "gender";
    UserScalarFieldEnum["function"] = "function";
    UserScalarFieldEnum["organisation"] = "organisation";
    UserScalarFieldEnum["category"] = "category";
    UserScalarFieldEnum["companySize"] = "companySize";
    UserScalarFieldEnum["activity"] = "activity";
    UserScalarFieldEnum["country"] = "country";
    UserScalarFieldEnum["phone"] = "phone";
    UserScalarFieldEnum["status"] = "status";
    UserScalarFieldEnum["role"] = "role";
    UserScalarFieldEnum["forgotToken"] = "forgotToken";
    UserScalarFieldEnum["createdDate"] = "createdDate";
    UserScalarFieldEnum["updatedDate"] = "updatedDate";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
