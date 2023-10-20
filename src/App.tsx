import SearchInput from "./components/SearchInput";
import { FC, useEffect, useState } from "react";
import useGetUsers from "./hooks/useGetUsers";
import UserList from "./components/UserList";

const App: FC = () => {
    const [search, setSearch] = useState("");
    const { data, isLoading, error, refetch } = useGetUsers(search);

    useEffect(() => {
        refetch();
    }, [search]);

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка при получении данных из сервера</div>;
    }

    return (
        <div className="app">
            <SearchInput setSearch={setSearch} />
            <UserList list={data} />
        </div>
    );
};

export default App;
