import React from 'react';
import s from './Contact.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <div className={s.contactBlockTitle}>
                    <span>Contact</span>
                    <h2>
                        I Want to Hear from You
                    </h2>
                </div>
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

