import { UserService } from '../services/user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): {
        id: number;
        name: string;
        email: string;
    }[];
}
