import Image from 'next/image';
import styles from './profileimage.module.scss';

export function ProfileImg() {
    return (
        <div className={styles.imageContent}>
            <div className={styles.frame} />
            <Image src="https://avatars.githubusercontent.com/u/52255226?v=4" width="234" height="244" alt="profile_image" className={styles.image} />
        </div>
    );
}