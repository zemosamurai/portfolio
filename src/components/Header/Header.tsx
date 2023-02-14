import React, {useState} from 'react';
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {Icon} from "../Icon/Icon";
import {useAppSelector} from "../../bll/store";
import {FooterType} from "../../bll/app-reducer";
import {useScrollDirection} from "../../hooks/scrollDirection";


export const Header = () => {
    const headerData = useAppSelector<FooterType[]>(state => state.app.headerFooterIcons)
    const [nav, setNav] = useState(false)
    const scroll = useScrollDirection()

    return (
        <div className={`${s.header} ${scroll === 'down' ? s.hide : ''}`} id={'header'}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Nav active={nav} editActive={setNav}/>

                <div className={s.slash}>X</div>

                <div className={s.wrapperIcon}>
                    {headerData.map(el => <Icon
                            key={el.id}
                            id={el.id}
                            path={el.path}
                            imgSrc={el}
                            className={s.icon}
                        />
                    )}
                </div>

                <div className={s.mobileBtn} onClick={() => setNav(!nav)}>
                    {nav
                        ? <div><AiOutlineClose color={'#fff'} size={30}/></div>
                        : <AiOutlineMenu color={'#fff'} size={30}/>
                    }
                </div>


            </div>
        </div>
    );
}

