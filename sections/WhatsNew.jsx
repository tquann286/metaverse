'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from '../styles'
import { newFeatures } from '../constants'
import { NewFeatures, TitleText, TypingText } from '../components'
import { MOTION_STATE, planetVariants, staggerContainer, fadeIn } from '../utils/motion'

const WhatsNew = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial={MOTION_STATE.HIDDEN}
      whileInView={MOTION_STATE.SHOW}
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.paddings, 'mx-auto flex flex-col gap-8 lg:flex-row')}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex flex-[0.95] flex-col justify-center"
      >
        <TypingText title="| Whats new?" />
        <TitleText title="What's new about Metaversus?" />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div variants={planetVariants('right')} className={cn(styles.flexCenter, 'flex-1')}>
        <img src="/whats-new.png" alt="get-started" className="h-[90%] w-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
)

export default WhatsNew
