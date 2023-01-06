'use client'

import cn from 'classnames'
import { useState } from 'react'
import { motion } from 'framer-motion'

import styles from '../styles'
import { exploreWorlds } from '../constants'
import { MOTION_STATE, staggerContainer } from '../utils/motion'
import { ExploreCard, TitleText, TypingText } from '../components'

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={styles.paddings} id="explore">
      <motion.div
        variants={staggerContainer}
        initial={MOTION_STATE.HIDDEN}
        whileInView={MOTION_STATE.SHOW}
        viewport={{ once: false, amount: 0.25 }}
        className={cn(styles.innerWidth, 'mx-auto flex flex-col')}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="hidden md:block" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex min-h-[70vh] flex-col gap-5 lg:flex-row">
          {exploreWorlds?.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
