import React, { useEffect, useState } from 'react'

import classes from './Callendar.module.scss'
import Lottie from 'react-lottie-player'
import HeartLottie from '@/assets/lotties/heart.json'

export const Callendar = () => {
  const [leftTime, setLeftTime] = useState('')

  const leftDay = () => {
    const today = new Date()
    const dDay = new Date('2024-05-25 12:00')

    const diffDay = dDay.getTime() - today.getTime()
    const remainTime = Math.ceil(diffDay / (1000 * 60 * 60 * 24))
    const second = String(Math.floor(diffDay / 1000) % 60).padStart(2, '0')
    const minute = String(Math.floor((diffDay / (1000 * 60)) % 60)).padStart(
      2,
      '0'
    )
    const hours = String(
      Math.floor((diffDay / (1000 * 60 * 60)) % 60)
    ).padStart(2, '0')

    return setLeftTime(`${remainTime}일 ${hours}시간 ${minute}분 ${second}초`)
  }

  const calendar = ['일', '월', '화', '수', '목', '금', '토']
  const days = () => {
    let arr = []
    for (let i = 1; i <= 31; i++) {
      arr.push(i)
    }

    return arr
  }

  useEffect(() => {
    const interval = setInterval(() => leftDay(), 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className={classes.calendar_section}>
      <h3 className={classes.left_days}>결혼식까지 </h3>
      <h3 className={classes.left_days}>{leftTime}</h3>
      <h3 className={classes.left_days}> 남았습니다.</h3>

      <div className={classes.calendar_wrapper}>
        <ul>
          {calendar.map((day) => (
            <li key={day}>{day}</li>
          ))}
          <li></li>
          <li></li>
          <li></li>
          {days().map((day) => (
            <li key={day} className={day === 25 ? classes.d_day : ''}>
              <p>{day}</p>
              {day === 25 && (
                <div className={classes.wedding_day}>
                  <Lottie
                    loop
                    animationData={HeartLottie}
                    play
                    speed={0.8}
                    style={{ width: 150, height: 150 }}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <h3 className={classes.left_days}>2024년 05월 25일 오후 12시</h3>
    </section>
  )
}
