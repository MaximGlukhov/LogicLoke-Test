import React from "react";
import classes from "./style.module.scss";

interface ICourseCard {
    card: ICourse;
}

export const CourseCard = ({ card }: Partial<ICourseCard>) => {
    return (
        <div className={classes.root}>
            <div style={{ background: `${card?.bgColor}` }} className={classes.top}>
                <img src={card?.image} alt='' />
            </div>
            <div className={classes.bottom}>
                <p className={classes.title}>{card?.name}</p>
            </div>
        </div>
    );
};
