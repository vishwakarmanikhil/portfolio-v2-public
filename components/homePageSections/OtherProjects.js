import classNames from 'classnames';
import otherProjectsList from '../projectsList.json';
import IconAssests from '../svgAssests/IconAssests';
import { isValidValue } from '../commonFunctions';
import styles from './style.module.css';
import Color from "@/constants/color";

const OtherProjects = () => {

    return (
        <ul className={classNames(styles.other_project__list)}>
            {otherProjectsList?.filter(d => d?.projectType === 'normal')?.sort((a, b) => a?.projectPriority - b?.projectPriority)?.map((data, key) => {
                return (
                    <li key={`normal-project-${data?.key}-${key}`} className={classNames(styles.other_project__item, 'p-5 md:p-7 bg-slate-700 dark:bg-slate-700 rounded-md')} data-aos='fade-up' data-aos-delay={`${key * 200}`}>
                        <div className='flex flex-row items-center justify-between mb-7'>
                            <div>
                                <IconAssests.FolderOutlineIcon height="40" width="40" filledColor={Color.primary} />
                            </div>
                            <div className={classNames('flex flex-row gap-3')}>
                                {isValidValue(data?.repositoryLink) ?
                                    <a href={data?.repositoryLink} title='github project link' target='_blank' className={classNames('z-10')}><IconAssests.GithubOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>
                                    : ""}
                                {isValidValue(data?.projectLink) ?
                                    <a href={data?.projectLink} title='project link' target='_blank' className={classNames('z-10')}><IconAssests.LinkOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>
                                    : ""}
                                {isValidValue(data?.androidAppStoreLink) ?
                                    <a href={data?.androidAppStoreLink} title='playstore app link' target='_blank' className={classNames('z-10')}><IconAssests.GooglePlayStoreOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>
                                    : ""}
                                {isValidValue(data?.appleAppStoreLink) ?
                                    <a href={data?.appleAppStoreLink} title='applestore app link' target='_blank' className={classNames('z-10')}><IconAssests.AppleStoreOutlineIcon height='30' width='30' filledColor={Color.iconDark} /></a>
                                    : ""}
                            </div>
                        </div>
                        <h3 className={classNames(styles.opi_title__txt, 'block text-xl font-bold text-gray-100 dark:text-gray-300 mb-5')}>
                            {isValidValue(data?.projectLink) ?
                                <a href={data?.projectLink} title={`${data?.title} link`} className={classNames(styles.opi_redirect__link)}>{data?.title}</a>
                                :
                                <p>{data?.title}</p>
                            }
                        </h3>
                        <p className={classNames('text-sm font-normal text-gray-500 md:text-gray-300 dark:text-gray-400')}>{data?.description}</p>

                        {isValidValue(data?.technology) ?
                            <ul className={classNames('flex flex-row flex-wrap gap-x-3 gap-y-1 mt-5 mb-5')}>
                                {data?.technology?.split(",")?.map((data, index) => {
                                    return (
                                        <li key={`technology-${data?.key}-${index}`}>
                                            <p className={classNames('text-xs font-light text-gray-400 dark:text-gray-400')}>{data}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            : ""}
                    </li>
                )
            })}
        </ul>
    );
};

export default OtherProjects;