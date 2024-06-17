import { axiosInstance } from "@/lib/axios";


export const createChat = (data) => {
    const { user_id, course_id, chat_title, user_propmt } = data;
    return axiosInstance.post("/chat/new", { user_id, course_id, chat_title, user_propmt });
};

export const sendChat = (data) => {
    const { chat_id, user_id, user_propmt } = data;
    return axiosInstance.patch("/chat/send/", { chat_id, user_id, user_propmt });
};

export const deleteChat = (data) => {
    const { chat_id, user_id } = data;
    return axiosInstance.delete("/chat/delete/", { chat_id, user_id });
}


