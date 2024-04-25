import React, { useEffect } from 'react'
import VisualImage from '@/assets/images/main_1.jpg'
import Image from 'next/image'

import classes from './VisualPart.module.scss'
import useSakura from '../common/Sakura'

export const VisualPart = () => {
  useSakura('visual', { newOn: 500, petalLifetime: 500 })

  return (
    <section className={classes.visual_section}>
      <div className={classes.img_box} id={'visual'}>
        <Image
          src={VisualImage}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <div className={classes.text_box}>
        <div className={classes.title}>
          <div>
            <h4>신랑</h4>
            <h2>민 정 기</h2>
          </div>
          <div>
            <h4>신부</h4>
            <h2>우 윤 서</h2>
          </div>
        </div>
        <div className={classes.location}>
          <h5>2024.05.25 SAT PM 12:00</h5>
          <h5>문수 컨벤션 웨딩홀 그란데베뉴</h5>
        </div>
      </div>
    </section>
  )
}
