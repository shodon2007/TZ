import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: () =>
            axios.get("http://127.0.0.1:3000/").then(({ data }) => data),
    });
}

export default useGetUsers;
