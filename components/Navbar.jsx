'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { APP_NAME } from '../constants'
import styles from '../styles'
import { MOTION_STATE, navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial={MOTION_STATE.HIDDEN}
    whileInView={MOTION_STATE.SHOW}
    className={cn(styles.xPaddings, 'relative py-8')}
  >
    <div className="gradient-01 absolute inset-0 w-1/2" />
    <div className={cn(styles.innerWidth, 'mx-auto flex justify-between gap-8')}>
      <Image src="/search.svg" alt="search" width={24} height={24} className="object-contain" />
      <h2 className="text-base font-extrabold leading-[30px] text-white">{APP_NAME}</h2>
      <Image src="/menu.svg" width={24} height={24} alt="menu" />
    </div>
  </motion.nav>
)

export default Navbar
