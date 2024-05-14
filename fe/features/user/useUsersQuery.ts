import { axiosInstance } from '../../src/libs/axios';
import { useQuery } from "@tanstack/react-query"
export const useUsersQuery = () => {
    return useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const response = axiosInstance.get('/users')
            return response
        }
    })
}