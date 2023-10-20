import { FC } from "react";
import { TypeUser } from "../types/user";

type Props = {
    list: TypeUser[];
};

const UserList: FC<Props> = ({ list }) => {
    return (
        <div className="list">
            {list.map((item) => {
                return <div>{item.name}</div>;
            })}
        </div>
    );
};

export default UserList;
