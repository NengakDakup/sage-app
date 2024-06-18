import { axiosInstance } from "@/lib/axios";


export const createCourse = (data) => {
    return axiosInstance.post("/course/new", data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const getCourses = () => {
    return axiosInstance.get("/course/list/");
};



export const editCourse = (data) => {
    const { course_id, user_id, course_name, documents } = data;
    return axiosInstance.patch("/course/edit/", { course_id, user_id, course_name, documents });
};

export const deleteCourse = (data) => {
    return axiosInstance.delete("/course/delete/" + data.id);
}


