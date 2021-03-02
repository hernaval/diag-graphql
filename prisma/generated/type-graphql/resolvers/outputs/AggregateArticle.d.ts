import { ArticleCountAggregate } from "../outputs/ArticleCountAggregate";
import { ArticleMaxAggregate } from "../outputs/ArticleMaxAggregate";
import { ArticleMinAggregate } from "../outputs/ArticleMinAggregate";
export declare class AggregateArticle {
    count: ArticleCountAggregate | null;
    min: ArticleMinAggregate | null;
    max: ArticleMaxAggregate | null;
}
