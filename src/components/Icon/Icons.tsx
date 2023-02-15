import React from "react";
import {ReactComponent as Telegram} from '../../assets/image/icons/telegram.svg'
import {ReactComponent as Git} from '../../assets/image/icons/github.svg'
import {ReactComponent as Linkedin} from '../../assets/image/icons/linkedin.svg'
import {ReactComponent as Gmail} from '../../assets/image/icons/gmail.svg'

type IconProps = {
    className: string
}

export const Icons = ({className}: IconProps) => {
    return (
        <>
            <a
                href={'https://github.com/zemosamurai'}
                target='_blank'
            >
                <Git className={className}/>
            </a>
            <a
                href={'mailto:zemosamurai@gmail.com'}
                target='_blank'
            >
                <Gmail className={className}/>
            </a>
            <a
                href={'https://t.me/zemosamurai'}
                target='_blank'
            >
                <Telegram className={className}/>
            </a>
            <a
                href={'https://www.linkedin.com/in/kim-harokhau-191b00264/'}
                target='_blank'
            >
                <Linkedin className={className}/>
            </a>
        </>
    )
}