/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import styles from './profileimage.module.scss';

export function ProfileImg() {
    return (
        <div className={styles.imageContent}>
            <img src="https://avatars.githubusercontent.com/u/52255226?v=4" alt="profile_image" className={styles.image} />
            <div className={styles.frame} />
        </div>
    );
}