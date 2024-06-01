import React from "react";
import classes from "./styles.module.scss";
import { CourseCard } from "../CourseCard/CourseCard";
import { NotFound } from "../../pages/NotFound/NotFound";

interface ICoursesList {
    data: ICourse[];
    isLoading: boolean;
    isError: boolean;
    filtered: string;
}

export const CoursesList = ({ data, isLoading, isError, filtered }: ICoursesList) => {
    if (isLoading) {
        return <h1 className={classes.loading}>Загрузка...</h1>;
    }

    if (isError) {
        return <NotFound />;
    }

    const getFiltered = () => {
        return (
            data
                // eslint-disable-next-line array-callback-return
                .filter((obj: ICourse) => {
                    if (obj.tags.includes(filtered)) {
                        return true;
                    }
                })
                .map((item: ICourse) => <CourseCard card={item} key={item.id} />)
        );
    };

    return (
        <div className={classes.root}>
            {filtered !== "Все темы"
                ? getFiltered()
                : data.map((item: ICourse) => <CourseCard card={item} key={item.id} />)}
        </div>
    );
};
