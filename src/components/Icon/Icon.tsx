import React from "react";
import s from '../Header/Header.module.scss'

type IconProps = {
    id: string
    path: string
    imgSrc: {backgroundImage: string}
}

export const Icon = ({id, path, imgSrc}: IconProps) => {
    return (
        <a
            href={path}
            key={id}
            target='_blank'
        >
            <div className={s.icon} style={imgSrc}/>
        </a>
    )
}