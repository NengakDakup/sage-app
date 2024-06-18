
import React, { createContext, useState, useEffect, useContext } from 'react';
import { isAxiosError } from 'axios';
import { getCourses } from '@/api/course';

// Create the context
const CoursesContext = createContext();

// Create the provider component
export const DashboardProvider = ({ children }) => {
    const [activeCourse, setActiveCourse] = useState('')
    const [courses, setCourses] = useState({
        list: [],
        loading: false,
        error: null,
    })

    // Function to fetch data
    const fetchCourses = async () => {
        setCourses(prevState => ({...prevState, loading: true}))
        try {
            let {data} = await getCourses();
            setCourses(prevState => ({...prevState, list: data.courses}))
        } catch(error) {
            if (isAxiosError(error)) {
              if (error.response) {
                const { data, status } = error.response;
                if (status === 401 || status === 400 || status === 404) {
                    setCourses(prevState => ({...prevState, error: data.error}))
                }
              }
            }
        }
        setCourses(prevState => ({...prevState, loading: false}))
    };

    const addNewCourse = (data) => {
        setCourses(prevState => ({...prevState, list: [data,...prevState.list]}))
    }


    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <CoursesContext.Provider value={{ courses, fetchCourses, addNewCourse, activeCourse, setActiveCourse }}>
            {children}
        </CoursesContext.Provider>
    );
};

export const useCourses = () => useContext(CoursesContext);
