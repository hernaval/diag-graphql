import { Survey } from "../models/Survey";
import { UserSaveArticle } from "../models/UserSaveArticle";
export declare class User {
    id: string;
    email: string;
    emailConfirmed?: boolean | null;
    passwordHash: string;
    username?: string | null;
    firstName: string;
    lastName: string;
    gender: string;
    function: string;
    organisation: string;
    category: string;
    companySize: string;
    activity: string;
    country: string;
    phone: string;
    status?: string | null;
    role?: string | null;
    forgotToken?: string | null;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    Surveys?: Survey[];
    Articles?: UserSaveArticle[];
}
