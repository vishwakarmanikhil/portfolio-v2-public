import Image from 'next/image';
import styles from './style.module.css';
import classNames from 'classnames';
import IconAssests from '../svgAssests/IconAssests';
import featuredProjectList from '../projectsList.json';
import { isValidValue } from '../commonFunctions';
import Color from '@/constants/color';

const FeaturedProject = () => {
    return (
        <ul className={classNames(styles.featured_project__list)}>
            {featuredProjectList?.filter(d => d?.projectType === 'featured')?.sort((a, b) => a?.projectPriority - b?.projectPriority)?.slice(0, 3)?.map((data, key) => {
                return (
                    <li key={`featured-project-${data?.key}-${key}`} className={classNames(styles.featured_project__item, key % 2 == 0 ? styles.fpi__right : styles.fpi__left)} data-aos='zoom-in'>
                        <a href={data?.projectLink} target='_blank' className={classNames(styles.fp_image__wrap)}>
                            <Image
                                src={`https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/${data?.image}`}
                                height='400'
                                width='400'
                                priority={false}
                                className={classNames(styles.fp_image)}
                                alt={`${data?.title} project by Nikhil Vishwakarma`}
                            />
                        </a>
                        <div className={classNames(styles.fp_content__wrap)}>
                            <p className={classNames('text-sm font-medium text-sky-500 dark:text-sky-500 mb-3')}>Featured Project</p>
                            <h3><a href={data?.projectLink} title={`${data?.value} link`} target='_blank' className={classNames('block text-2xl font-bold text-gray-700 dark:text-gray-300 mb-5')}>{data?.title}</a></h3>
                            <div className={classNames(styles.fp_description__wrap, 'p-6 bg-slate-700 dark:bg-slate-700 rounded-md')}>
                                <p className={classNames('text-md font-medium text-gray-500 md:text-gray-400 dark:text-gray-400')}>{data?.description}</p>
                            </div>
                            {isValidValue(data?.technology) ?
                                <ul className={classNames(styles.fp_technology__list, 'flex flex-row flex-wrap gap-x-3 gap-y-1 mt-5 mb-5')}>
                                    {data?.technology?.split(",")?.map((data, index) => {
                                        return (
                                            <li key={`technology-${data?.key}-${index}`}>
                                                <p className={classNames('text-sm font-light text-gray-500 dark:text-gray-400')}>{data}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                : ""}
                            <div className={classNames(styles.fp_link__wrap, 'flex flex-row gap-3', 'fp_link__wrap')}>
                                {isValidValue(data?.repositoryLink) ?
                                    <a href={data?.repositoryLink} title={`github project link`} target='_blank'><IconAssests.GithubOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>
                                    : ""}
                                {isValidValue(data?.projectLink) ?
                                    <a href={data?.projectLink} title={`project link`} target='_blank'><IconAssests.LinkOutlineIcon height='25' width='25' filledColor={Color.iconDark} /></a>
                                    : ""}
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default FeaturedProject;