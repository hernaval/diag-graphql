import { ArticleCreateNestedOneWithoutUsersInput } from "../inputs/ArticleCreateNestedOneWithoutUsersInput";
import { UserCreateNestedOneWithoutArticlesInput } from "../inputs/UserCreateNestedOneWithoutArticlesInput";
export declare class UserSaveArticleCreateInput {
    dateSaved?: Date | undefined;
    User: UserCreateNestedOneWithoutArticlesInput;
    Article: ArticleCreateNestedOneWithoutUsersInput;
}
