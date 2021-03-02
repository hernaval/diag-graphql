import { Question } from "../models/Question";
import { Quiz } from "../models/Quiz";
export declare class Dimension {
    id: string;
    name: string;
    createdDate?: Date | null;
    updatedDate?: Date | null;
    Questions?: Question[];
    quizId: string;
    Quiz?: Quiz;
}
