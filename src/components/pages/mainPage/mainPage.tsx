import { UsersList } from "../../molecules/UsersList/usersList";
import { MainTemplate } from "../../templates/mainTemplate/mainTemplate";
import "./mainPage.css";

export const MainPage = () => {
    return (
        <MainTemplate>
            <main className="mainPage">
                <h1 className="mainPage__title">Список пользователей</h1>
                <UsersList />
            </main>
        </MainTemplate>
    );
};
