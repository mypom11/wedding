import React, { useState } from 'react'
import { KakaoMap } from '../common/KakaoMap'

import classes from './LocationPart.module.scss'
import { BottomSheetLayout } from '../layout/BottomSheetLayout'

import { TbTrain, TbBus } from 'react-icons/tb'
import Image from 'next/image'

import naverNav from '@/assets/images/naver.webp'
import kakaoNav from '@/assets/images/kakaonav.png'
import tmap from '@/assets/images/tmap.svg'

export const LocationPart = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [roadOpen, setRoadOpen] = useState(false)

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

      <div className={classes.navigation}>
        <button onClick={() => setRoadOpen(true)}>대중교통</button>
        <button onClick={() => setNavOpen(true)}>네비게이션</button>
      </div>

      <BottomSheetLayout isOpen={roadOpen} setIsOpen={setRoadOpen}>
        <div className={classes.transport}>
          <div>
            <h2>
              <TbTrain />
              <em> KTX 이용시</em>
            </h2>
            <h4>
              KTX울산역에서 5004번 탑승 후 문수경기장 하차
              <em>(KTX역에서 약 25분 소요, 하차 후 도보 2분거리)</em>
            </h4>
          </div>
          <div>
            <h2>
              <TbBus /> <em>버스 이용시</em>
            </h2>
            <ul>
              <li>
                <b>[신복 로터리]</b>
                405, 406, 407, 411, 413, 421, 422, 426, 422, 733
              </li>
              <li>
                <b>[공업탑 로터리]</b>
                405, 406, 411, 413, 426, 433, 733, 1137, 2100, 2300
              </li>
              <li>
                <b>[울산 고속버스 터미널]</b>
                407, 2100, 2300
              </li>
              <li>
                <b>[북구청]</b>
                421
              </li>
              <li>
                <b>[울산공항/호계]</b>
                422
              </li>
              <li>
                <b>[노포동/웅상]</b>
                1137, 2100, 2300
              </li>
            </ul>
          </div>
        </div>
      </BottomSheetLayout>
      <BottomSheetLayout isOpen={navOpen} setIsOpen={setNavOpen}>
        <div className={classes.nav_list}>
          <ul>
            <li>
              <a
                href="javascript:void(0);"
                onclick="location.href='https://apis.openapi.sk.com/tmap/app/routes?appKey=Xir82s6UgQ55y0SAJVtK533f0UdSoh0Z8AlGloK2&name=문수컨벤션웨딩홀&lon=129.2587&lat=35.53603'"
              >
                <Image src={tmap} width={40} height={40} />
                티맵으로 길찾기
              </a>
            </li>
            <li>
              <a href="">
                <Image src={kakaoNav} width={40} height={40} />
                카카오네비로 길찾기
              </a>
            </li>
            <li>
              <a href="">
                <Image src={naverNav} width={40} height={40} />
                네이버지도로 길찾기
              </a>
            </li>
          </ul>
        </div>
      </BottomSheetLayout>
    </section>
  )
}
