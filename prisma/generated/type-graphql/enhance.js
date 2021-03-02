"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyArgsTypesEnhanceMap = exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const crudResolvers = require("./resolvers/crud/resolvers-crud.index");
const actionResolvers = require("./resolvers/crud/resolvers-actions.index");
const models = require("./models");
const outputTypes = require("./resolvers/outputs");
const inputTypes = require("./resolvers/inputs");
const argsTypes = require("./resolvers/crud/args.index");
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Quiz: crudResolvers.QuizCrudResolver,
    Dimension: crudResolvers.DimensionCrudResolver,
    Question: crudResolvers.QuestionCrudResolver,
    Survey: crudResolvers.SurveyCrudResolver,
    Article: crudResolvers.ArticleCrudResolver,
    UserSaveArticle: crudResolvers.UserSaveArticleCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver
    },
    Quiz: {
        quiz: actionResolvers.FindUniqueQuizResolver,
        findFirstQuiz: actionResolvers.FindFirstQuizResolver,
        quizzes: actionResolvers.FindManyQuizResolver,
        createQuiz: actionResolvers.CreateQuizResolver,
        deleteQuiz: actionResolvers.DeleteQuizResolver,
        updateQuiz: actionResolvers.UpdateQuizResolver,
        deleteManyQuiz: actionResolvers.DeleteManyQuizResolver,
        updateManyQuiz: actionResolvers.UpdateManyQuizResolver,
        upsertQuiz: actionResolvers.UpsertQuizResolver,
        aggregateQuiz: actionResolvers.AggregateQuizResolver
    },
    Dimension: {
        dimension: actionResolvers.FindUniqueDimensionResolver,
        findFirstDimension: actionResolvers.FindFirstDimensionResolver,
        dimensions: actionResolvers.FindManyDimensionResolver,
        createDimension: actionResolvers.CreateDimensionResolver,
        deleteDimension: actionResolvers.DeleteDimensionResolver,
        updateDimension: actionResolvers.UpdateDimensionResolver,
        deleteManyDimension: actionResolvers.DeleteManyDimensionResolver,
        updateManyDimension: actionResolvers.UpdateManyDimensionResolver,
        upsertDimension: actionResolvers.UpsertDimensionResolver,
        aggregateDimension: actionResolvers.AggregateDimensionResolver
    },
    Question: {
        question: actionResolvers.FindUniqueQuestionResolver,
        findFirstQuestion: actionResolvers.FindFirstQuestionResolver,
        questions: actionResolvers.FindManyQuestionResolver,
        createQuestion: actionResolvers.CreateQuestionResolver,
        deleteQuestion: actionResolvers.DeleteQuestionResolver,
        updateQuestion: actionResolvers.UpdateQuestionResolver,
        deleteManyQuestion: actionResolvers.DeleteManyQuestionResolver,
        updateManyQuestion: actionResolvers.UpdateManyQuestionResolver,
        upsertQuestion: actionResolvers.UpsertQuestionResolver,
        aggregateQuestion: actionResolvers.AggregateQuestionResolver
    },
    Survey: {
        survey: actionResolvers.FindUniqueSurveyResolver,
        findFirstSurvey: actionResolvers.FindFirstSurveyResolver,
        surveys: actionResolvers.FindManySurveyResolver,
        createSurvey: actionResolvers.CreateSurveyResolver,
        deleteSurvey: actionResolvers.DeleteSurveyResolver,
        updateSurvey: actionResolvers.UpdateSurveyResolver,
        deleteManySurvey: actionResolvers.DeleteManySurveyResolver,
        updateManySurvey: actionResolvers.UpdateManySurveyResolver,
        upsertSurvey: actionResolvers.UpsertSurveyResolver,
        aggregateSurvey: actionResolvers.AggregateSurveyResolver
    },
    Article: {
        article: actionResolvers.FindUniqueArticleResolver,
        findFirstArticle: actionResolvers.FindFirstArticleResolver,
        articles: actionResolvers.FindManyArticleResolver,
        createArticle: actionResolvers.CreateArticleResolver,
        deleteArticle: actionResolvers.DeleteArticleResolver,
        updateArticle: actionResolvers.UpdateArticleResolver,
        deleteManyArticle: actionResolvers.DeleteManyArticleResolver,
        updateManyArticle: actionResolvers.UpdateManyArticleResolver,
        upsertArticle: actionResolvers.UpsertArticleResolver,
        aggregateArticle: actionResolvers.AggregateArticleResolver
    },
    UserSaveArticle: {
        userSaveArticle: actionResolvers.FindUniqueUserSaveArticleResolver,
        findFirstUserSaveArticle: actionResolvers.FindFirstUserSaveArticleResolver,
        userSaveArticles: actionResolvers.FindManyUserSaveArticleResolver,
        createUserSaveArticle: actionResolvers.CreateUserSaveArticleResolver,
        deleteUserSaveArticle: actionResolvers.DeleteUserSaveArticleResolver,
        updateUserSaveArticle: actionResolvers.UpdateUserSaveArticleResolver,
        deleteManyUserSaveArticle: actionResolvers.DeleteManyUserSaveArticleResolver,
        updateManyUserSaveArticle: actionResolvers.UpdateManyUserSaveArticleResolver,
        upsertUserSaveArticle: actionResolvers.UpsertUserSaveArticleResolver,
        aggregateUserSaveArticle: actionResolvers.AggregateUserSaveArticleResolver
    }
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
            const decorators = resolverActionsConfig[modelResolverActionName];
            const crudTarget = crudResolversMap[modelName].prototype;
            const actionResolversConfig = actionResolversMap[modelName];
            const actionTarget = actionResolversConfig[modelResolverActionName].prototype;
            for (const decorator of decorators) {
                decorator(crudTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName));
                decorator(actionTarget, modelResolverActionName, Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName));
            }
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype) {
    if (enhanceConfig.class) {
        for (const decorator of enhanceConfig.class) {
            decorator(typeClass);
        }
    }
    if (enhanceConfig.fields) {
        for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
            const decorators = enhanceConfig.fields[modelFieldName];
            for (const decorator of decorators) {
                decorator(typePrototype, modelFieldName);
            }
        }
    }
}
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
