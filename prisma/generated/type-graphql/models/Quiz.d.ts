import { Dimension } from "../models/Dimension";
export declare class Quiz {
    id: string;
    name: string;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    Dimensions?: Dimension[];
}
