import React, { ReactNode, ReactElement } from 'react';
import Link from 'next/link';
import styles from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
    color?: 'secondary';
    route: string;
}

export function Button({ children, color, route }: ButtonProps) {
    return (
        <Link href={route} passHref>
            <div className={`${styles.container} ${color === 'secondary' ? '' : styles.primaryButton}`}>
                <strong className={styles.title}>{children}</strong>
            </div>
        </Link>
    )
}
