'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'

import styles from '../styles'
import { insights } from '../constants'
import { MOTION_STATE, staggerContainer } from '../utils/motion'
import { InsightCard, TitleText, TypingText } from '../components'

const Insights = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <motion.div
      variants={staggerContainer}
      initial={MOTION_STATE.HIDDEN}
      whileInView={MOTION_STATE.SHOW}
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, 'mx-auto flex flex-col')}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
)

export default Insights
