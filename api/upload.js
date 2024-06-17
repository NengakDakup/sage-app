import { axiosInstance } from "@/lib/axios";


export const uploadDocument = (data) => {
    const { user_id, file } = data;
    return axiosInstance.post("/document/new", { user_id, file });
};

export const deleteDocument = (data) => {
    const { doc_id, user_id } = data;
    return axiosInstance.delete("/document/delete/", { doc_id, user_id });
}


