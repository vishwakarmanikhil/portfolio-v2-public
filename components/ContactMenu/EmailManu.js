import React from 'react';
import style from './style.module.css';
import classNames from 'classnames';

const EmailManu = () => {

    return (
        <div className={classNames(style.contact_menu__email)} data-aos="fade-in" data-aos-delay='2000'>
            <div className={classNames('flex flex-col')}>
                <div className={classNames(style.cme__division)}>
                    <a href='mailto:vnikhil3101@gmail.com' title='mail to vnikhil3101@gmail.com' className={classNames(style.cme__link_email, ' text-gray-500 dark:text-gray-400 hover:text-sky-500')}>vnikhil3101@gmail.com</a>
                </div>
                <div className={classNames(style.cme__divison_line, 'bg-gray-500 dark:bg-gray-400')}></div>
            </div>
        </div>
    );
};

export default EmailManu;