import classNames from 'classnames';
import styles from './style.module.css';

const ContactMe = () => {
    return (
        <div className={classNames('flex flex-col text-center items-center')}>
            <h2 className={classNames('text-sm font-medium text-sky-500 dark:text-sky-500 text-center mb-2')} data-aos='fade-up'>What&apos;s Next?</h2>
            <h2 className={classNames(styles.contact_title__txt, 'font-bold text-gray-800 dark:text-gray-200 mb-5')} data-aos='fade-up' data-aos-delay='100'>Get In Touch</h2>
            <p className={classNames('text-lg font-medium text-gray-500 dark:text-gray-400 mb-16')} data-aos='fade-up' data-aos-delay='200'>Actively Seeking Opportunities: Whether you have a question or just want to say hi, feel free to reach out. I&apos;ll do my best to respond promptly!</p>
            <a href='mailto:vnikhil3101@gmail.com' title='mail to vnikhil3101@gmail.com' className="inline-block p-4 me-2 mb-2 text-sm font-medium text-sky-500 focus:outline-none bg-white rounded-lg border border-sky-500 hover:bg-gray-100 hover:text-sky-600 hover:border-sky-600 focus:z-10 focus:ring-4 focus:ring-transparent dark:bg-transparent hover:dark:bg-sky-900 min-w-36" data-aos='fade-up' data-aos-delay='500'>Say Hello</a>
        </div>
    );
};

export default ContactMe;