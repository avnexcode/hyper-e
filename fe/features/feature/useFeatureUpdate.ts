import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../../src/libs/axios"

type Feature = {
    id: number
    username: string
    title: string
    started_time: string
    end_time: string
    status: string
    level: string
}
type useUpdateFeatureParams = {
    onSuccess: () => void,
    onError: () => void
}

export const useFeatureUpdate = ({ onSuccess, onError }: useUpdateFeatureParams) => {
    return useMutation({
        mutationFn: async (body: Feature) => {
            try {
                const response = axiosInstance.put(`/features/${body.id}`, body)
                return response
            } catch (error) {
                if (error.response) {
                    console.log("error res data", error.response.data);
                    console.log("error res status", error.response.status);
                    console.log("error res header", error.response.headers);

                } else if (error.request) {

                    console.log("error req", error.request);
                } else {

                    console.log('Error', error.message);
                }
            }
        },
        onSuccess,
        onError,
    })
}