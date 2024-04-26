import React from 'react'
import { useInView } from 'react-intersection-observer'
import classes from './Introduce.module.scss'

export const Introduce = () => {
  const { ref, inView, entry } = useInView({
    threshold: '0',
  })

  return (
    <section className={classes.introduce_section} ref={ref}>
      <h2>Love</h2>
      <ul className={inView ? classes.active : ''}>
        <li>장담하건데,</li>
        <li>세상이 다 겨울이어도</li>
        <li>우리 사랑은 늘 봄처럼 따뜻하고</li>
        <li>간혹, 여름처럼 뜨거울 겁니다.</li>
        <li>- 이수동 [사랑가]</li>
      </ul>
      <ul className={inView ? classes.active : ''}>
        <li>저희 두 사람이 한마음 한뜻으로</li>
        <li>새 인생을 시작하려 합니다.</li>
        <li>봄 꽃처럼 곱게,</li>
        <li>봄 햇살처럼 포근하게,</li>
        <li>서로를 귀히 여기며 살겠습니다.</li>
        <li>부디 시작의 자리에 함께해 주시어</li>
        <li>축복해 주시면 감사하겠습니다.</li>
      </ul>

      <div className={`${classes.name} ${inView ? classes.active : ''}`}>
        <div>
          <h3>박연남</h3>
          <h4>장남</h4>
          <h3>민정기</h3>
        </div>
        <div>
          <h3>
            우승연
            <br />
            (우순노)
          </h3>
          <h4>장녀</h4>
          <h3>우윤서</h3>
        </div>
      </div>
    </section>
  )
}
