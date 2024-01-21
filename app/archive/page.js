import React from 'react';
import classNames from 'classnames';
import style from './style.module.css';
import ProjectList from '../../components/projectsList.json';
import { isValidValue } from '@/components/commonFunctions';
import IconAssests from '@/components/svgAssests/IconAssests';
import Color from '@/constants/color';
import DeveloperCredit from '@/components/homePageSections/DeveloperCredit';

const tableHeader = [
    {
        key: 'year',
        value: 'Year',
    },
    {
        key: 'title',
        value: 'Title',
    },
    {
        key: 'madeAt',
        value: 'Made at',
    },
    {
        key: 'buildWith',
        value: 'Built with',
    },
    {
        key: 'link',
        value: 'Link',
    },
]

const projectListSortedArray = ProjectList.sort((a, b) => {
    const dateA = new Date(a.createdDate.split('-').reverse().join('-'));
    const dateB = new Date(b.createdDate.split('-').reverse().join('-'));

    return dateB - dateA;
});

const Archive = () => {

    return (
        <section className={classNames(style.archive__page)}>
            <div className={classNames(style.archive__banner_wrap)}>
                <h1 className={classNames(style.main_heading__txt, 'text-gray-800 dark:text-gray-200 font-bold mb-4')} data-aos='fade-up' data-aos-delay='900'>Archive</h1>
                <p className={classNames('text-lg tracking-wider font-regular text-sky-500 dark:text-sky-500')} data-aos='fade-up' data-aos-delay='1000'>A Vast Array of Projects I&apos;ve Engaged With</p>
            </div>

            <div className={classNames(style.archive__project_wrap)} data-aos='fade-up' data-aos-delay='1100'>
                <div className={classNames(style.ap__table)}>
                    <div className={classNames(style.ap__row, 'px-5 py-3 mb-5')}>
                        {tableHeader.map((data, key) => {
                            return (
                                <div key={`${data?.key}-${key}`} className={classNames(style.ap__column)}>
                                    <p className={classNames(style.ap__item, 'text-md md:text-lg tracking-wider font-medium text-gray-500 dark:text-gray-300')}>{data?.value}</p>
                                </div>
                            )
                        })}
                    </div>

                    {projectListSortedArray?.map((data, key) => {
                        return (
                            <div key={`${data?.key}-${key}`} className={classNames(style.ap__row, 'hover:bg-sky-100 dark:hover:bg-gray-800 rounded-md px-5 py-3')}>
                                <div className={classNames(style.ap__column)}>
                                    <p className={classNames(style.ap__item, 'text-md md:text-lg tracking-wider font-regular text-sky-500 dark:text-sky-500')}>{data?.createdDate?.split('-')[2]}</p>
                                </div>
                                <div className={classNames(style.ap__column)}>
                                    <p className={classNames(style.ap__item, ' text-md md:text-lg tracking-wider font-medium text-gray-600 dark:text-gray-200')}>{data?.title}</p>
                                </div>
                                <div className={classNames(style.ap__column)}>
                                    {isValidValue(data?.companyName) ?
                                        <a href={data?.companyLink} target='_blank' className={classNames(style.ap__item, 'text-md font-normal text-gray-500 dark:text-gray-400 hover:text-sky-500')} title={data?.companyName}>{data?.companyName}</a>
                                        :
                                        <p className={classNames(style.ap__item, 'text-md font-normal text-gray-500 dark:text-gray-400')}>—</p>
                                    }
                                </div>
                                <div className={classNames(style.ap__column)}>
                                    <ul className={classNames(style.apc_skills__list)}>
                                        {data?.technology?.split(",")?.map((data, index) => {
                                            return (
                                                <li key={`${data?.key}-${key}-${index}}`} className={classNames(style.apc_skills__item, 'text-sm font-light text-gray-500 dark:text-gray-400')}><p className={classNames(style.ap__item)}>{data}</p></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className={classNames(style.ap__column, 'flex flex-row flex-wrap gap-3', 'apc__link_list')}>
                                    {isValidValue(data?.repositoryLink) && <a href={data?.repositoryLink} target='_blank' className={classNames(style.ap__item)} title='Github project link'><IconAssests.GithubOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>}
                                    {isValidValue(data?.projectLink) && <a href={data?.projectLink} target='_blank' className={classNames(style.ap__item)} title='Project Live link'><IconAssests.LinkOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>}
                                    {isValidValue(data?.androidAppStoreLink) && <a href={data?.androidAppStoreLink} target='_blank' className={classNames(style.ap__item)} title='Project playstore link'><IconAssests.GooglePlayStoreOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>}
                                    {isValidValue(data?.appleAppStoreLink) && <a href={data?.appleAppStoreLink} target='_blank' className={classNames(style.ap__item)} title='Project applestore link'><IconAssests.AppleStoreOutlineIcon height='30' width='30' filledColor={Color.iconDark} /></a>}
                                    {isValidValue(data?.otherLink) && <a href={data?.otherLink} target='_blank' className={classNames(style.ap__item)} title='project other link'><IconAssests.LinkOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

            <div className={classNames('pb-5')}>
                <DeveloperCredit />
            </div>
        </section>
    )
}

export default Archive;