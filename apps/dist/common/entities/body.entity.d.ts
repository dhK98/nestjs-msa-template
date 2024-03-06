import { UserBody } from './user-body.entity';
export declare enum AthleticCareer {
    beginner = "beginner",
    intermediate = "intermediate",
    advanced = "advanced"
}
export declare class Body {
    id: string;
    weight: number;
    height: number;
    smm: number;
    bfm: number;
    athleticCareer: AthleticCareer;
    users: UserBody[];
}
