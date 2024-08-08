import { useGetUsers } from "../../../hooks/useGetUsers";
import { User } from "../../../interfaces/data";
import { LineHorizontal } from "../../atoms/lineHorizontal/lineHorizontal";
import { UserItem } from "../../atoms/userItem/userItem";
import "./userList.css";

const staleTime = 10_000;

export const UsersList = () => {
    const { data, isLoading, isError, error } = useGetUsers(staleTime);

    if (isLoading) {
        return <p className="userList__message">Загрузка...</p>;
    }

    if (isError) {
        return (
            <p className="userList__message userList__message_error">
                {error?.message}
            </p>
        );
    }

    return (
        <>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((user: User) => {
                        return (
                            <li key={user.id}>
                                <UserItem key={user.id} user={user} />
                                <LineHorizontal />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className="userList__message">Список пользователей пуст</p>
            )}
        </>
    );
};
