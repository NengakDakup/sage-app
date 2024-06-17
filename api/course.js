import { axiosInstance } from "@/lib/axios";


export const createCourse = (data) => {
    const { user_id, course_name, documents } = data;
    return axiosInstance.post("/course/new", { user_id, course_name, documents });
};

export const editCourse = (data) => {
    const { course_id, user_id, course_name, documents } = data;
    return axiosInstance.patch("/course/edit/", { course_id, user_id, course_name, documents });
};

export const deleteCourse = (data) => {
    const { course_id, user_id } = data;
    return axiosInstance.delete("/course/delete/", { course_id, user_id });
}


