import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    const description = 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor'

    return (
        <div className={s.project}>
            <div className={s.icon}></div>
            <h3>New Title Props</h3>
            <div className={s.description}>{description}</div>
        </div>
    );
};

