import { useState } from 'react'
import { Container, Content } from './styles'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function Slider({ images }) {
  const [current, setCurrent] = useState(0)

  const sliderAnimation = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
  }

  const handlePrevImg = () => {
    if (current === 0) {
      return
    }
    setCurrent((prevState) => prevState - 1)
  }

  const handleNextImg = () => {
    setCurrent((prevState) => prevState + 1)
  }

  return (
    <Container>
      {!(current === 0) && (
        <FiArrowLeft
          size={34}
          onClick={handlePrevImg}
          style={{ cursor: 'pointer' }}
        />
      )}
      <Content key={String(new Date())}>
        <motion.img
          src={images && images[current]}
          alt="image"
          width="100%"
          height="100%"
          initial="hidden"
          animate="visible"
          variants={sliderAnimation}
        />
      </Content>
      {!(current === images?.length - 1) && (
        <FiArrowRight
          size={34}
          onClick={handleNextImg}
          style={{ cursor: 'pointer' }}
        />
      )}
    </Container>
  )
}
