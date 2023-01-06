'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from '../styles'
import { startingFeatures } from '../constants'
import { StartSteps, TitleText, TypingText } from '../components'
import { MOTION_STATE, staggerContainer, fadeIn, planetVariants } from '../utils/motion'

const GetStarted = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial={MOTION_STATE.HIDDEN}
      whileInView={MOTION_STATE.SHOW}
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.paddings, 'mx-auto flex flex-col gap-8 lg:flex-row')}
    >
      <motion.div variants={planetVariants('left')} className={cn(styles.flexCenter, 'flex-1')}>
        <img src="/get-started.png" alt="get-started" className="h-[90%] w-[90%] object-contain" />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title="Get started with just a few clicks" />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default GetStarted
