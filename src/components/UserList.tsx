import { FC } from "react";
import { TypeUser } from "../types/user";
import phoneSvg from "../static/phone.svg";
import emailSvg from "../static/email.svg";
import MyTitle from "./UI/title/MyTitle";
import MyText from "./UI/text/MyText";

type Props = {
    list: TypeUser[];
    setModal: any;
};

const UserList: FC<Props> = ({ list, setModal }) => {
    return (
        <div className="list">
            {list.map((item) => {
                return (
                    <div
                        className="item"
                        key={item.name}
                        onClick={() => setModal({ active: true, user: item })}
                    >
                        <MyTitle>{item.name}</MyTitle>
                        <div className="item__bottom">
                            <div>
                                <img src={phoneSvg} alt="phone" />
                                <MyText>{item.phone}</MyText>
                            </div>
                            <div>
                                <img src={emailSvg} alt="phone" />
                                <MyText>{item.email}</MyText>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default UserList;
