'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'
import { MOTION_STATE, textContainer, textVariant2 } from '../utils/motion'

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={cn(textStyles, 'text-[14px] font-normal text-secondary-white')}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial={MOTION_STATE.HIDDEN}
    whileInView={MOTION_STATE.SHOW}
    className={`mt-[8px] text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
  >
    {title}
  </motion.h2>
)
