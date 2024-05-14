import { axiosInstance } from '../../src/libs/axios';
import { useQuery } from '@tanstack/react-query';
export const useFeaturesQuery = () => {
    return useQuery({
        queryKey: ["features"],
        queryFn: async () => {
            const response = await axiosInstance('/features')
            return response
        }
    })
}