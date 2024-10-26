import { axiosInstance } from "@/lib/axios";


export const createChat = (data) => {
    const { user_id, course_id, chat_title, user_propmt } = data;
    return axiosInstance.post("/chat/new", { user_id, course_id, chat_title, user_propmt });
};

export const sendChat = (data) => {
    return axiosInstance.post("/chat/send/", {messages: data, model: "llama3-8b-8192"});
};

export const deleteChat = (data) => {
    const { chat_id, user_id } = data;
    return axiosInstance.delete("/chat/delete/", { chat_id, user_id });
}


