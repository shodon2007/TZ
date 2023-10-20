import { FC, memo, useState } from "react";
import searchSvg from "../static/search.svg";
import { Search } from "../types/search";

const SearchInput: FC<Search> = memo(({ setSearch }) => {
    let [inputSearch, setInputSearch] = useState<string>("");
    return (
        <div className="input">
            <input
                type="text"
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
            />
            <img
                src={searchSvg}
                alt="search"
                onClick={() => setSearch(inputSearch)}
            />
        </div>
    );
});

export default SearchInput;
