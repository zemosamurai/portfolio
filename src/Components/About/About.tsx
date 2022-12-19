import React from 'react';
import s from './About.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const About = () => {
    const text = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat.'

    return (
        <div className={s.aboutBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.aboutBlockTitle}>
                    <span>About Me</span>
                    <h2>
                        A Passionate Developer Who Loves to Code
                    </h2>
                </div>
                <div className={s.wrapper}>
                    <div className={s.photo}></div>
                    <div className={s.aboutMe}>
                        <h3>About Me</h3>
                        <p>{text}</p>
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
