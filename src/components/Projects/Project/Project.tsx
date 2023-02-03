import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
    link: string
}

export const Project = ({title, description, style, link}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.icon} style={style}>
                <a href={link} className={s.imgBtn}>View Details</a>
            </div>
            <div className={s.content}>
                <h4 className={s.projectTitle}>{title}</h4>
                <div className={s.description}>{description}</div>
            </div>
        </div>
    );
};

