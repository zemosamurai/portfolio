import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import mainImg from '../../assets/image/imgMainPage/mainImg.png'
import {useAppSelector} from "../../bll/store";
import {MainType} from "../../bll/app-reducer";

export const Main = () => {
    const mainData = useAppSelector<MainType>(state => state.app.main)

    return (
        <div className={s.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <h1 className={s.name}>{mainData.firstName} <span>{mainData.lastName}</span></h1>
                    <p className={s.description}>{mainData.description}</p>
                    <div className={s.btnWrapper}>
                        <a href='#contact'>
                            <div className={s.btnGet}>Get Connected</div>
                        </a>
                        <a href='#contact'>
                            <div className={s.btnCv}>Download CV</div>
                        </a>
                    </div>
                </div>
                <div className={s.photo}>
                    <img src={mainImg} alt="#"/>
                </div>
            </div>
        </div>
    );
}

