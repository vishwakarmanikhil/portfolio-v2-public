import React from 'react'
import SocialMenu from '../ContactMenu/SocialMenu';
import classNames from 'classnames';

const DeveloperCredit = () => {

    return (
        <div className={classNames('w-full flex flex-col justify-center')}>
            <SocialMenu
                source='footer'
            />
            <a href='https://github.com/vishwakarmanikhil/Portfolio-v2' title='Nikhil Vishwakarma portfolio link' target='_blank' className={classNames('text-sm font-normal text-center pb-8 text-sky-500 dark:text-sky-600')}>Developed By Nikhil Vishwakarma</a>
        </div>
    )
}

export default DeveloperCredit;