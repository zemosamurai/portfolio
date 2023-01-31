import React from "react";

type IconProps = {
    id: string
    path: string
    imgSrc: {backgroundImage: string}
    className: string
}

export const Icon = ({id, path, imgSrc, className}: IconProps) => {
    return (
        <a
            href={path}
            key={id}
            target='_blank'
        >
            <div className={className} style={imgSrc}/>
        </a>
    )
}