import React from 'react';
import s from './Contact.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/commonComponents/Title/Title";

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Title title={'Contact'} text={'I Want to Hear from You'}/>
                <form className={s.formBlock} name="email_form">
                    <input placeholder="Your Name" type="text" name="first_name"/>
                    <input placeholder="Your E-mail" type="email" name="email"/>
                    <textarea placeholder="Write your message here" name="textarea"/>
                    <input type="submit" value="Submit Now"/>
                </form>
            </div>
        </div>
    );
};

