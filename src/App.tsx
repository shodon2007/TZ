import SearchInput from "./components/SearchInput";
import { FC } from "react";
import useGetUsers from "./hooks/useGetUsers";
import UserList from "./components/UserList";

const App: FC = () => {
    const { data, isLoading, error } = useGetUsers();

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при получении данных из сервера</div>;
    }

    return (
        <div className="app">
            <SearchInput />
            <UserList list={data} />
        </div>
    );
};

export default App;
