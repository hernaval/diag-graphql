import { UserSaveArticleCountAggregate } from "../outputs/UserSaveArticleCountAggregate";
import { UserSaveArticleMaxAggregate } from "../outputs/UserSaveArticleMaxAggregate";
import { UserSaveArticleMinAggregate } from "../outputs/UserSaveArticleMinAggregate";
export declare class AggregateUserSaveArticle {
    count: UserSaveArticleCountAggregate | null;
    min: UserSaveArticleMinAggregate | null;
    max: UserSaveArticleMaxAggregate | null;
}
