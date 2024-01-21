import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import WorkExperience from './workExperience.json';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        setActiveTab(WorkExperience?.[0]?.key);
    }, [WorkExperience]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={classNames('flex flex-col md:flex-row')} data-aos='fade-up' data-aos-delay='100'>
            <div className="border-s-0 md:border-s border-b md:border-b-0 border-gray-200 dark:border-gray-700 h-max">
                <nav className={classNames(styles.experience_tab__list, "flex flex-row md:flex-col overflow-auto md:overflow-hidden")} aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
                    {WorkExperience?.map((data, key) => {
                        return (
                            <button key={`tab-button-${data?.key}-${key}`} onClick={() => handleTabClick(data?.key)} type="button" className={classNames('py-3 ps-5 pe-5 md:pe-3 inline-flex items-center gap-x-2 text-sm whitespace-nowrap  hover:text-sky-600 focus:outline-none focus:text-sky-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-sky-500 w-auto md:w-52 hover:bg-sky-100 dark:hover:bg-gray-800 transition duration-150 ease-out hover:ease-in', activeTab === data?.key ? 'text-sky-500 dark:text-sky-500 border-s-0 md:border-s-4 border-b-4 md:border-b-0 border-sky-500 dark:border-sky-500' : 'text-gray-500 border-s-0 md:border-s-4 border-b-4 md:border-b-0 border-transparent dark:border-transparent')} id={`vertical-tab-with-border-item-${key + 1}`} data-hs-tab={`#vertical-tab-with-border-${key + 1}`} aria-controls={`vertical-tab-with-border-${key + 1}`} role="tab" title={`${data?.value} tab`} name={`${data?.value} tab`}>
                                <span className={classNames('text-md truncate', activeTab === data?.key ? 'font-semibold' : 'font-medium')}>{data?.value}</span>
                            </button>
                        )
                    })}
                </nav>
            </div>

            <div className={classNames("ms-3 pl-0 md:pl-10 mt-10 md:mt-0")}>
                {WorkExperience?.map((data, key) => {
                    return (
                        <div key={`tab-wrapper-${data?.key}-${key}`} className={`${activeTab === data?.key ? 'block' : 'hidden'}`} id={`vertical-tab-with-border-${key + 1}`} role="tabpanel" aria-labelledby={`vertical-tab-with-border-item-${key + 1}`}>
                            <h3 className={classNames('text-xl font-medium')}><span className={classNames('text-gray-700 dark:text-gray-300')}>{data?.position} </span><span className={classNames('text-sky-500')}>@</span> <a href={data?.companyURL} title={data?.value} target='_blank' className={classNames('text-sky-500 hover:text-sky-600 hover:underline')}>{data?.value}</a></h3>
                            <div className='inline-block mt-1'>
                                <p className={classNames('text-xs font-medium text-gray-700 dark:text-gray-500')}>{data?.timeLine?.start} - {data?.timeLine?.end}</p>
                            </div>

                            <div className={classNames('mt-5')}>
                                <ul>
                                    {data?.jobDescription?.map((data, index) => {
                                        return (
                                            <li key={`jobDescription-${key}-${index}`} className={classNames(styles.jobdescription__item, 'text-sm font-medium text-gray-500 dark:text-gray-400 mb-2')}>{data}</li>
                                        )
                                    })}
                                </ul>
                            </div>

                            {data?.jobSkills && data?.jobSkills !== '' && data?.jobSkills !== null && (
                                <div className={classNames('flex flex-row flex-wrap gap-2 pl-4 mt-10')}>
                                    {data?.jobSkills?.split(',')?.map((data, index) => {
                                        return (
                                            <div key={`jobSkill-${key}-${index}`} className={classNames('py-2 px-3 rounded-3xl  bg-gray-100 dark:bg-gray-800 text-sky-500 dark:text-sky-500 border-sky-500 dark:border-sky-500')}>
                                                <p className={classNames('text-xs font-medium')}>{data}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Experience;