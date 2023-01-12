import React from 'react';
import s from './About.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/commonComponents/Title/Title";

export const About = () => {
    const titleFromTitle = 'About Me'
    const textFromTitle = 'A Passionate Developer Who Loves to Code'
    const text = 'I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA, usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies. In the future, I would like to become a full-stack developer.'

    return (
        <div className={s.aboutBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title={titleFromTitle} text={textFromTitle}/>
                <div className={s.wrapper}>
                    <div className={s.photo}></div>
                    <div className={s.aboutMe}>
                        <h3 className={s.title}>About Me</h3>
                        <p className={s.text}>{text}</p>
                        <div className={s.list}>
                            <ul className={s.listUL}>
                                <li>
                                    <span>Name</span>
                                    <p>Kim Harokhau</p>
                                </li>
                                <li>
                                    <span>Age</span>
                                    <p>22</p>
                                </li>
                                <li>
                                    <span>Location</span>
                                    <p>Gomel, Belarus</p>
                                </li>
                            </ul>
                            <ul className={s.listUL}>
                                <li>
                                    <span>Email</span>
                                    <p>zemosamurai@gmail.com</p>
                                </li>
                                <li>
                                    <span>Phone</span>
                                    <p>+375 (29) 239-63-31</p>
                                </li>
                                <li>
                                    <span>Freelance</span>
                                    <p>Yes</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
