import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/api";

export function useGetUsers(staleTime: number) {
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers,
        staleTime,
    });

    return { data, isLoading, isSuccess, isError, error };
}
