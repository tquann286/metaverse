'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'
import { TypingText } from '../components'

import styles from '../styles'
import { MOTION_STATE, fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={cn(styles.paddings, 'relative z-10')}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial={MOTION_STATE.HIDDEN}
      whileInView={MOTION_STATE.SHOW}
      viewport={{ once: false, amount: 0.25 }}
      className={cn(styles.innerWidth, styles.flexCenter, 'mx-auto flex-col')}
    >
      <TypingText title="| About Metaversus" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] text-center text-[20px] font-normal text-secondary-white sm:text-[32px]"
      >
        <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future,
        where you can enjoy the virtual world by feeling like it's really real, you can feel what
        you feel in this metaverse world, because this is really the{' '}
        <span className="font-extrabold text-white">madness of the metaverse</span> of today, using
        only <span className="font-extrabold text-white">VR</span> devices you can easily explore
        the metaverse world you want, turn your dreams into reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness of the metaverse by
        scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="mt-[28px] h-[28px] w-[18px] object-contain"
      />
    </motion.div>
  </section>
)

export default About
