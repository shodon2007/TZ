import { FC, ReactNode, memo } from "react";
import classes from "./MySubtitle.module.scss";

type Props = {
    children: ReactNode;
};

const MySubtitle: FC<Props> = memo(({ children }) => {
    return <div className={classes.text}>{children}</div>;
});

export default MySubtitle;
