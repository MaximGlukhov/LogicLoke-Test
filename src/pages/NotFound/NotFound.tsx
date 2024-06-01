import React from "react";
import classes from "./styles.module.scss";

export const NotFound = () => {
    return (
        <div className={classes.root}>
            <h1>Произошла ошибка, попробуйте перезагрузить страницу</h1>
        </div>
    );
};
