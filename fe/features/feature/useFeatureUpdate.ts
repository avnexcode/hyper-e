import { useMutation } from "@tanstack/react-query"
import { axiosInstance } from "../../src/libs/axios"

type Feature = {
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
            const response = axiosInstance.put('/features', body)
            return response
        },
        onSuccess,
        onError,
    })
}