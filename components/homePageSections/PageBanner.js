import classNames from 'classnames';
import styles from './style.module.css';

const PageBanner = () => {

    return (
        <div>
            <div className='mb-5' data-aos='fade-up' data-aos-delay='900'>
                <h1 className={classNames('text-sm font-medium text-sky-500 dark:text-sky-500')}>Hi, my name is</h1>
            </div>
            <div className='' data-aos='fade-up' data-aos-delay='950'>
                <h2 className={classNames(styles.main_heading__txt, 'text-gray-800 dark:text-gray-200 font-bold')}>Nikhil Vishwakarma.</h2>
            </div>
            <div className='' data-aos='fade-up' data-aos-delay='1000'>
                <h3 className={classNames(styles.main_heading__txt, 'text-gray-600 dark:text-gray-400 font-bold')}>I bring web ideas to vibrant life.</h3>
            </div>
            <div className='mt-5 md:w-1/2' data-aos='fade-up' data-aos-delay='1050'>
                <p className={classNames('text-md font-normal text-gray-500 dark:text-gray-400')}>
                    Experienced software engineer dedicated to building, researching, and getting things done. Actively seeking exciting new opportunities for professional and personal development.
                </p>
            </div>
            <div className='mt-5' data-aos='fade-up' data-aos-delay='1200'>
                <a href='https://ik.imagekit.io/vishwakarmanikhil/portfolio-v2/Nikhil%20Vishwakarma%20resume.pdf' target='_blank' title='resume link' className="inline-block px-6 py-4 me-2 mb-2 text-sm font-medium text-sky-500 focus:outline-none bg-white rounded-lg border border-sky-500 hover:bg-gray-100 hover:text-sky-600 hover:border-sky-600 focus:z-10 focus:ring-4 focus:ring-transparent dark:bg-transparent hover:dark:bg-sky-900">Check out my Resume!</a>
            </div>
        </div>
    );
};

export default PageBanner;