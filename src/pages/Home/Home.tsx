import React, { useState } from "react";
import classes from "./styles.module.scss";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CoursesList } from "../../components/CoursesList/CoursesList";
import { useGetData } from "../../hooks/useGetData";

export const Home = () => {
    const url = "https://logiclike.com/docs/courses.json";
    const { data, isLoading, isError } = useGetData(url);
    const tags: string[] = ["Все темы"];
    const [filtered, setFiltered] = useState("Все темы");

    data.forEach((item: ICourse) => {
        item.tags.forEach((tag) => {
            if (!tags.includes(tag)) {
                tags.push(tag);
            }
        });
    });

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Sidebar setFiltered={setFiltered} tags={tags} />
                <CoursesList filtered={filtered} data={data} isLoading={isLoading} isError={isError} />
            </div>
        </div>
    );
};
