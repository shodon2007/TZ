import React, { Dispatch } from "react";

export type Search = {
    setSearch: Dispatch<React.SetStateAction<string>>
};