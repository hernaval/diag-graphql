import { Dimension } from "../models/Dimension";
export declare class Question {
    id: string;
    sentence: string;
    createdDate?: Date | null;
    updatedDate: Date;
    dimensionId: string;
    Dimension?: Dimension;
}
