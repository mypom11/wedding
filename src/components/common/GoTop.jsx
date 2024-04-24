import React from 'react'
import Lottie from 'react-lottie-player'
import Arrow from '@/assets/lotties/arrow.json'

import classes from './GoTop.module.scss'

export const GoTop = ({ onTop, isOn }) => {
  return (
    <div
      className={`${classes.top_container} ${isOn ? classes.open : ''}`}
      onClick={onTop}
    >
      <Lottie
        loop
        animationData={Arrow}
        play
        speed={1}
        style={{ width: 30, height: 30 }}
      />
    </div>
  )
}
