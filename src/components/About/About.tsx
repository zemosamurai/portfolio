import React from 'react';
import s from './About.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/commonComponents/Title/Title";
import myImage from '../../assets/image/imgAbout/main1.jpg'
import {initialState} from "../../bll/appData";

export const About = () => {
    const aboutData = initialState.about

    return (
        <div className={s.aboutBlock} id={'about'}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title={aboutData.title} text={aboutData.description}/>
                <div className={s.wrapper}>
                    <div className={s.photo}>
                        <img src={myImage} alt="#"/>
                    </div>
                    <div className={s.aboutMe}>
                        <h3 className={s.title}>About Me</h3>
                        <p className={s.text}>{aboutData.textMe}</p>
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
