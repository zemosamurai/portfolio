import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";
import {initialState} from "../../bll/appData";
import {Icon} from "../Icon/Icon";

export const Header = () => {
    const headerData = initialState.headerFooterIcons
    return (
        <div className={s.header}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Nav/>
                <div className={s.slash}>X</div>
                <div className={s.wrapperIcon}>
                    {headerData.map(el => <Icon key={el.id} id={el.id} path={el.path} imgSrc={el}/>)}
                </div>
            </div>
        </div>
    );
}

