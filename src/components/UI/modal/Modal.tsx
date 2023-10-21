import { FC, memo } from "react";
import { TypeModal } from "../../../types/modal";
import exitSvg from "../../../static/exit.svg";
import classes from "./Modal.module.scss";
import MyTitle from "../title/MyTitle";
import MySubtitle from "../subtitle/MySubtitle";
import MyText from "../text/MyText";

type Props = {
    modal: TypeModal;
    setModal: any;
};

const Modal: FC<Props> = memo(({ modal, setModal }) => {
    const modalClasses = [classes.modal];

    function removeModal() {
        setModal({ active: false, user: false });
    }

    if (!modal.user) {
        return null;
    }
    const modalValues = [
        {
            title: "Телефон:",
            value: modal.user.phone,
        },
        {
            title: "Почта:",
            value: modal.user.email,
        },
        {
            title: "Дата приема:",
            value: modal.user.hire_date,
        },
        {
            title: "Должность:",
            value: modal.user.position_name,
        },
        {
            title: "Подразделение:",
            value: modal.user.department,
        },
    ];
    if (modal.active) {
        modalClasses.push(classes.active);
    }
    return (
        <div className={modalClasses.join(" ")} onClick={removeModal}>
            <div className={classes.body} onClick={(e) => e.stopPropagation()}>
                <div className={classes.top}>
                    <MyTitle>{modal.user.name}</MyTitle>
                    <img src={exitSvg} alt="exit" onClick={removeModal} />
                </div>
                <table className={classes.center}>
                    {modalValues.map((item) => {
                        return (
                            <tr key={item.title}>
                                <td>
                                    <MySubtitle>{item.title}</MySubtitle>
                                </td>
                                <td>
                                    <MyText>{item.value}</MyText>
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <div className={classes.bottom}>
                    <MySubtitle>Дополнительная информация:</MySubtitle>
                    <MyText>
                        Разработчики используют текст в качестве заполнителя
                        макета страницы. Разработчики используют текст в
                        качестве заполнителя макета страницы.
                    </MyText>
                </div>
            </div>
        </div>
    );
});

export default Modal;
