import { axiosInstance } from "../../src/libs/axios"
import { useMutation } from "@tanstack/react-query"

type Feature = {
    username: string
    title: string
    started_time: string
    status: string
    level: string
}
type useCreateFeatureParams = {
    onSuccess: () => void,
    onError: () => void
}
export const useCreateFeature = ({ onSuccess, onError }: useCreateFeatureParams) => {
    return useMutation({
        mutationFn: async (body: Feature) => {
            try {
                const response = axiosInstance.post('/features', body)
                return response
            } catch (error) {
                if (error.response) {
                    console.log("error res data",error.response.data);
                    console.log("error res status",error.response.status);
                    console.log("error res header",error.response.headers);

                  } else if (error.request) {

                    console.log("error req",error.request);
                  } else {
                    
                    console.log('Error', error.message);
                  }
            }
        },
        onSuccess,
        onError
    })
}