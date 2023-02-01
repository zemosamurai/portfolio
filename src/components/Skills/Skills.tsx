import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/commonComponents/Title/Title";
import {initialState} from "../../bll/appData";

export const Skills = () => {
    const skillsData = initialState.skills

    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={skillsData.title} text={skillsData.description}/>
                <div className={s.skills}>
                    {skillsData.data.map(el => {
                        return <Skill key={el.id} title={el.title} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    );
};



