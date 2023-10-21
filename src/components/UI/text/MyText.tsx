import { FC, ReactNode, memo } from "react";
import classes from "./MyText.module.scss";
type Props = {
    children: ReactNode;
};

const MyText: FC<Props> = memo(({ children }) => {
    return <div className={classes.text}>{children}</div>;
});

export default MyText;
