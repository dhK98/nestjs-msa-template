import { UserBody } from './user-body.entity';
export declare enum LoginType {
    kakao = "KAKAO",
    google = "GOOGLE",
    naver = "NAVER"
}
export declare enum Role {
    user = "USER",
    admin = "ADMIN"
}
export declare enum Gender {
    male = "MALE",
    female = "FEMALE"
}
export declare class User {
    id: string;
    socalLoginType: LoginType;
    phoneNumber: string;
    isReceivedAdvertisement: boolean;
    bod: Date;
    name: string;
    gender: Gender;
    role: Role;
    createdAt: Date;
    isDeleted: boolean;
    bodies: UserBody[];
}
