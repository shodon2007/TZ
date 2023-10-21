import { FC, ReactNode, memo } from "react";
import classes from "./MyTitle.module.scss";

type Props = {
    children: ReactNode;
};

const MyTitle: FC<Props> = memo(({ children }) => {
    return <div className={classes.text}>{children}</div>;
});

export default MyTitle;
