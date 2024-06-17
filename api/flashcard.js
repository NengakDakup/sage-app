import { axiosInstance } from "@/lib/axios";


export const createFlashcard = (data) => {
    const { user_id, title, text, documents } = data;
    return axiosInstance.post("/flashcard/new", { user_id, title, text, documents });
};

export const editFlashcard = (data) => {
    const { flashcard_id, user_id, title, text } = data;
    return axiosInstance.patch("/flashcard/edit/", { flashcard_id, user_id, title, text });
};

export const deleteFlashcard = (data) => {
    const { flashcard_id, user_id } = data;
    return axiosInstance.delete("/flashcard/delete/", { flashcard_id, user_id });
}


