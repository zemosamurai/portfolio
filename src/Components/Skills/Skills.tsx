import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={s.aboutBlockTitle}>
                    <span>Skills</span>
                    <h2>I Work Hard to Improve My Skills Regularly</h2>
                </div>
                <div className={s.skills}>
                    <Skill title={'js'} description={description}/>
                    <Skill title={'css'} description={description}/>
                    <Skill title={'react'} description={description}/>
                </div>
            </div>
        </div>
    );
};

