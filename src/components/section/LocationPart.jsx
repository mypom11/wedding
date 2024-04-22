import React from 'react'
import { KakaoMap } from '../common/KakaoMap'

import classes from './LocationPart.module.scss'

export const LocationPart = () => {
  return (
    <section className={classes.location_section}>
      <div className={classes.text_box}>
        <h3>오시는 길</h3>
        <h5>울산 남구 문수로 44</h5>
        <h5>울산시 남구 옥동 산5, 문수 축구 경기장</h5>
        <h5>052-277-690</h5>
      </div>

      <div className={classes.map_container}>
        <KakaoMap />
      </div>
    </section>
  )
}
