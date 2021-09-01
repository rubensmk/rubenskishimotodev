/* eslint-disable @next/next/no-img-element */
import styles from './modal.module.scss';
import { CgCloseO } from 'react-icons/cg'
import { RiGithubFill } from 'react-icons/ri'

interface ModalProps {
    closeModal: () => void;
}

export function Modal({ closeModal }: ModalProps) {

    return (
        <div className={styles.overlay} onClick={closeModal}>
            <div className={styles.container}>
                <header>
                    <div>
                        <h1>DS Deliver</h1>
                        <p>(rubensmk/ds-deliver)</p>
                    </div>
                    <CgCloseO size={26} color="#FFF5D0" onClick={closeModal} />
                </header>
                <section>
                    <strong>Descrição</strong>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal. </p>
                    <strong>Ferramentas</strong>
                    <p>React, React Native, Springboot Java</p>
                </section>
                <footer>
                    <a>
                        Repositório
                        <RiGithubFill size={26} color="#111111" />
                    </a>
                </footer>
            </div>
        </div>
    )
}