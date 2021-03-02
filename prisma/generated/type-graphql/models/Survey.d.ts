import { User } from "../models/User";
export declare class Survey {
    id: string;
    value: number;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    userId: string;
    User?: User;
}
