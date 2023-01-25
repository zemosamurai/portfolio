import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import mainImg from '../../assets/image/imgMainPage/mainImg.png'
import {initialState} from "../../bll/appData";

export const Main = () => {
    const mainData = initialState.main

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1 className={s.name}>{mainData.firstName} <span>{mainData.lastName}</span></h1>
                    <p className={s.description}>{mainData.description}</p>
                    <button className={s.btn}>Get Connected</button>
                </div>
                <div className={s.photo}>
                    <img src={mainImg} alt="#"/>
                </div>
            </div>
        </div>
    );
}

