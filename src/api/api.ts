import { BASE_URL } from "../const/const";
import { User } from "../interfaces/data";

export const getUsers = async (): Promise<User[]> => {
    try {
        const response = await fetch(`${BASE_URL}/users`);

        if (!response.ok) {
            throw new Error(
                `Ошибка получения пользователей: ${response.status}`
            );
        }

        const users: User[] = await response.json();
        return users;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        return [];
    }
};
