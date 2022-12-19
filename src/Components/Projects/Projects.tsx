import React from 'react';
import s from './Projects.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.aboutBlockTitle}>
                    <span>Projects</span>
                    <h2>
                        Projects I have Worked On
                    </h2>
                </div>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};

