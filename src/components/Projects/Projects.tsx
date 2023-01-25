import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/commonComponents/Title/Title';
import {initialState} from "../../bll/appData";

export const Projects = () => {
    const projectsData = initialState.projects

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title={projectsData.title} text={projectsData.description}/>
                <div className={s.projects}>
                    {projectsData.data.map(el => {
                        return <Project
                            style={el.img}
                            key={el.id}
                            title={el.title}
                            description={el.description}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

