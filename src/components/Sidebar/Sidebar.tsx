import React, { useState } from "react";
import classes from "./style.module.scss";

interface ISideBar {
    tags: string[];
    setFiltered: (a: string) => void;
}

export const Sidebar = ({ tags, setFiltered }: ISideBar) => {
    const [active, setActive] = useState("Все темы");

    const handleClickBtn = (index: string) => {
        setActive(index);
        setFiltered(index);
    };

    return (
        <div className={classes.root}>
            {tags.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleClickBtn(item)}
                    className={item === active ? `${classes.btn} ${classes.active}` : `${classes.btn}`}>
                    {item}
                </button>
            ))}
        </div>
    );
};
