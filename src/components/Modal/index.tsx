/* eslint-disable @next/next/no-img-element */
import styles from './modal.module.scss';
import { motion } from 'framer-motion';
import { CgClose } from 'react-icons/cg'
import { IProject } from '../ProjectCard';
import { TechBadge } from '../TechBadge';
import { Slider } from './Slider/Slider';

interface ModalProps {
    closeModal: () => void;
    modalInfo: IProject
}

export function Modal({ closeModal, modalInfo }: ModalProps) {
    const cardAnimation = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    }

    const bgAnimation = {
        visible: { opacity: 1, transition: { duration: 0.7 } },
        hidden: { opacity: 0 },
    }
    console.log(modalInfo)
    return (
        <motion.div className={styles.overlay}
            initial="hidden"
            animate="visible"
            variants={bgAnimation}>
            <motion.div className={styles.container}
                initial="hidden"
                animate="visible"
                variants={cardAnimation}>
                <header>
                    <div>
                        <h1>{modalInfo.title}</h1>
                    </div>
                    <CgClose size={26} color="#EBE7D9" onClick={closeModal} />
                </header>
                <section>
                    <strong>Descrição</strong>
                    <p>{modalInfo.description}</p>
                    <strong>Ferramentas</strong>
                    <div className={styles.techs}>
                        {modalInfo.techs.map(tech => (
                            <TechBadge key={tech.name} data={tech} />
                        ))}
                    </div>
                </section>
                <Slider images={modalInfo.images} />
            </motion.div>
        </motion.div>
    )
}