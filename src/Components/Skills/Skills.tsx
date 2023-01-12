import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/commonComponents/Title/Title";

type SkillType = {
    id: string
    title: string
    img: string
}
type SkillsPropsType = {
    skillsArr: Array<SkillType>
}

export const Skills = ({skillsArr}: SkillsPropsType) => {
    const titleFromTitle = 'Skills'
    const textFromTitle = 'I Work Hard to Improve My Skills Regularly'

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <Title title={titleFromTitle} text={textFromTitle}/>
                <div className={s.skills}>
                    {skillsArr.map(el => {
                        return <Skill key={el.id} title={el.title} img={el.img}/>
                    })}
                </div>
            </div>
        </div>
    );
};

