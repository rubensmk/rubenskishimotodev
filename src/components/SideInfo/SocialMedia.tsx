import { SiLinkedin, SiTwitter, SiInstagram, SiGithub, SiDiscord } from 'react-icons/si';
import styles from './sideinfo.module.scss';


export function SocialMedia() {
    return (
        <aside className={styles.social}>
            <div className={styles.list}>
                <a href="https://github.com/rubensmk" target="_blank" rel="noreferrer">
                    <SiGithub />
                    <p className="tooltip">github.com/rubensmk</p>
                </a>
                <a href="https://discord.com/" target="_blank" rel="noreferrer">
                    <SiDiscord />
                    <p className="tooltip">rubens.mk#7870</p>
                </a>
                <a href="https://www.linkedin.com/in/rubens-kishimoto/" target="_blank" rel="noreferrer">
                    <SiLinkedin />
                    <p className="tooltip">rubens-kishimoto</p>
                </a>
                <a href="https://www.instagram.com/rubens.mkishimoto/" target="_blank" rel="noreferrer">
                    <SiInstagram />
                    <p className="tooltip">@rubens.mkishimoto</p>
                </a>
            </div>
            <div className={styles.verticalLine} />
        </aside>
    );
}