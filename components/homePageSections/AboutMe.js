import classNames from 'classnames';
import styles from './style.module.css';
import Image from 'next/image';

const AboutMe = () => {

  return (
    <div className={classNames(styles.about__container)}>
      <div className={classNames(styles.about__left_wrap)} data-aos='fade-up' data-aos-delay='100'>
        <div>
          <p className={classNames('text-md font-medium text-gray-500 dark:text-gray-400 mb-3')}>Hi! I&apos;m Nikhil Vishwakarma. I enjoy exploring the internet for technology insights and implementing them hands-on for &apos;&apos;Learning by Doing&apos;&apos;. I began my career in a logistics company as a support associate for data verification. While working with CRM, I found myself debugging and reporting issues, sparking my passion for engineering.</p>

          <div className={classNames('text-md font-medium text-gray-500 dark:text-gray-400 mb-3')}>Today, with expertise gained from working with <a href='https://www.apl.com/' target='_blank' title='APL India Private Limited' className={classNames('text-sky-500 hover:text-sky-600 hover:underline')}>a major logistics company</a>, <a href='https://www.bhaktivedantahospital.com/' target='_blank' title='Bhaktivedanta Hospital & Research Institute' className={classNames('text-sky-500 hover:text-sky-600 hover:underline')}>a hospitality sector</a>, <a href='https://infratech.ind.in/' target='_blank' title='Infratech' className={classNames('text-sky-500 hover:text-sky-600 hover:underline')}>a real estate agency</a>, and <a href='https://bookanartist.co/' target='_blank' title='Book An Artist' className={classNames('text-sky-500 hover:text-sky-600 hover:underline')}>a startup</a>, I continually learn and expand my skills online. I aim to bring valuable insights to the companies I serve.</div>

          <p className={classNames('text-md font-medium text-gray-500 dark:text-gray-400 mb-3')}>Outside of work, I enjoy being a helping hand and visiting temples to delve deeper into Indian sanskriti. !! Hare Krishna<span>❤ </span>
            !!</p>
        </div>

        <div>
          <p className={classNames('text-md font-medium text-gray-500 dark:text-gray-400 mb-3')}>Here are some technologies I&apos;ve actively engaged with recently:</p>
          <ul className={classNames(styles.skill__list)}>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>JavaScript</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>Webpack</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>ReactJS</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>Wordpress</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>NextJS</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>PHP</li>
            <li className={classNames(styles.skill__item, 'text-xs font-medium text-gray-500 dark:text-gray-400')}>NodeJS</li>
          </ul>
        </div>
      </div>
      <div className={classNames(styles.about__right_wrap)} data-aos='zoom-in' data-aos-delay='100'>
        <div className={classNames(styles.self_image__wrap)}>
          <div className={classNames(styles.self_image__overlay)}></div>
          <Image
            src='https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/person.png'
            priority={false}
            className={classNames(styles.self__image)}
            height={500}
            width={500}
            alt={`It's me Nikhil Vishwakarma`}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;