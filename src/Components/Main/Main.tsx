import React from 'react';
import s from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.text}>
                    <h1>Kim Harokhau</h1>
                    <p>Frontend Developer based In Belarus</p>
                    <button>Get Connected</button>
                </div>
                <div className={s.photo}>
                </div>
            </div>
        </div>
    );
}

