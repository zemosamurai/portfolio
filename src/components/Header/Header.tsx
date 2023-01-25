import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";

export const Header = () => {

    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Nav/>
            </div>
        </div>
    );
}

