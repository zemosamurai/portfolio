import React from 'react';
import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/commonComponents/Title/Title';

export type ProjectType = {
    id?: string
    title: string
    description: string
    img: {backgroundImage: string}
}
type ProjectsPropsType = {
    projectsArr: Array<ProjectType>
}

export const Projects = ({projectsArr}: ProjectsPropsType) => {
    const titleFromTitle = 'Projects'
    const textFromTitle = 'Projects I have Worked On'

    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title={titleFromTitle} text={textFromTitle}/>
                <div className={s.projects}>
                    {projectsArr.map(el => {
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

