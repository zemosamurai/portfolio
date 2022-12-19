import React from 'react';
import s from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h4>You can find me here:</h4>
                <div className={s.wrapper}>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                    <div className={s.icon}></div>
                </div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};
