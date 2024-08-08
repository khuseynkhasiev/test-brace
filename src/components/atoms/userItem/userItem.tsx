import { memo } from "react";
import { User } from "../../../interfaces/data";

interface UserItemProps {
    user: User;
}

export const UserItem = memo(({ user }: UserItemProps) => {
    return (
        <>
            <p> Name: {user.name}</p>
            <p> Email: {user.email}</p>
        </>
    );
});
