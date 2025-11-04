import { User } from "../../services/user";

export interface AuthResponse {
    user: User;
    token: string;
}