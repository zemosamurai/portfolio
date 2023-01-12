import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1 className={s.name}>Kim <span>Harokhau</span></h1>
                    <p className={s.description}>Frontend Developer based In Belarus</p>
                    <button className={s.btn}>Get Connected</button>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
}

