import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";
import {initialState} from "../../bll/appData";

export const Header = () => {
    const footerData = initialState.footer
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Nav/>
                <div className={s.slash}>X</div>
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
            </div>
        </div>
    );
}

