import { FC, memo } from "react";
import searchSvg from "../static/search.svg";

const SearchInput: FC = memo(() => {
    return (
        <div className="input">
            <input type="text" />
            <img src={searchSvg} alt="search" />
        </div>
    );
});

export default SearchInput;
