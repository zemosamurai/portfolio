import React from 'react';
import s from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {useAppSelector} from "../../bll/store";
import {Icon} from "../Icon/Icon";
import {FooterType} from "../../bll/app-reducer";

export const Footer = () => {
    const footerData = useAppSelector<FooterType[]>(state => state.app.headerFooterIcons)

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <h4 className={s.title}>You can find me here:</h4>
                <div className={s.wrapper}>
                    {footerData.map(el => <Icon
                        key={el.id}
                        id={el.id}
                        path={el.path}
                        imgSrc={el}
                        className={s.icon}/>
                    )}
                </div>
                <span>© 2022 All rights reserved</span>
            </div>
        </div>
    );
};
