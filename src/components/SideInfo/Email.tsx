import styles from './sideinfo.module.scss';

export function Email() {
    return (
        <aside className={styles.email}>
            <a href="mailto:rubenskishimoto@gmail.com">
                rubenskishimoto@gmail.com
            </a>
            <div className={styles.verticalLine} />
        </aside>
    )
}