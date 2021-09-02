/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { Container, Content } from './styles';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function Slider({ images }) {
    const [img, setImg] = useState<string[]>(images);
    const [current, setCurrent] = useState(0);

    const sliderAnimation = {
        visible: { opacity: 1, transition: { duration: 1.5 } },
        hidden: { opacity: 0 },
    }

    const handlePrevImg = () => {
        if (current === 0) {
            return;
        }
        setCurrent(prevState => prevState - 1);
    }

    const handleNextImg = () => {
        setCurrent(prevState => prevState + 1);
    }

    return (
        <Container>
            {!(current === 0) && (
                <FiArrowLeft size={34} onClick={handlePrevImg} />
            )}
            <Content key={String(new Date())}>
                <motion.img src={img[current]} alt="image" width="900" height="460"
                    initial="hidden"
                    animate="visible"
                    variants={sliderAnimation}
                />
            </Content>
            {!(current === img.length - 1) && (
                <FiArrowRight size={34} onClick={handleNextImg} />
            )}
        </Container>
    );
}