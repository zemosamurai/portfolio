import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {initialState} from "../../bll/appData";

export const Footer = () => {
    const footerData = initialState.footer

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h4 className={s.title}>You can find me here:</h4>
                <div className={s.wrapper}>
                    <a href="#">
                        <div className={s.icon} style={footerData[0]}/>
                    </a>
                    <a href="#">
                        <div className={s.icon} style={footerData[1]}/>
                    </a>
                    <a href="#">
                        <div className={s.icon} style={footerData[2]}/>
                    </a>
                    <a href="#">
                        <div className={s.icon} style={footerData[3]}/>
                    </a>
                </div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};
