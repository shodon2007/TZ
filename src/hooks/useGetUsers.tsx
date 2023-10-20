import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useGetUsers(search: string) {
    return useQuery({
        queryKey: ["users"],
        queryFn: () =>
            axios
                .get(`http://127.0.0.1:3000/?term=${search}`)
                .then(({ data }) => data),
    });
}

export default useGetUsers;
