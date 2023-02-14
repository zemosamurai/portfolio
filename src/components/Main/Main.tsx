import React from 'react';
import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import mainImg from '../../assets/image/imgMainPage/mainImg.png'
import {useAppSelector} from "../../bll/store";
import {MainType} from "../../bll/app-reducer";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

export const Main = () => {
    const mainData = useAppSelector<MainType>(state => state.app.main)

    return (
        <div className={s.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <h1 className={s.name}>{mainData.firstName} <span>{mainData.lastName}</span></h1>

                    <ReactTypingEffect
                        text={mainData.description} speed={50} typingDelay={1000}
                        className={s.description}
                        displayTextRenderer={(text, i) => (
                            <p>{text.split('').map((char, i) => char)}</p>
                        )}
                    />

                    <div className={s.btnWrapper}>
                        <a href='#contact'>
                            <div className={s.btnGet}>Get Connected</div>
                        </a>
                        <a href='#contact'>
                            <div className={s.btnCv}>Download CV</div>
                        </a>
                    </div>
                </div>

                <Tilt tiltMaxAngleY={6} tiltMaxAngleX={6}>
                    <div className={s.photo}>
                        <img src={mainImg} alt="#"/>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

