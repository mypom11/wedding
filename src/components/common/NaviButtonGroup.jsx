import React, { useEffect } from 'react'
import Image from 'next/image'

import classes from '@/components/section/LocationPart.module.scss'
import naverNav from '@/assets/images/naver.webp'
import kakaoNav from '@/assets/images/kakaonav.png'
import tmap from '@/assets/images/tmap.svg'

export const NaviButtonGroup = ({ isOpen }) => {
  const handleTmap = () => {
    window.open(
      'https://apis.openapi.sk.com/tmap/app/routes?appKey=Xir82s6UgQ55y0SAJVtK533f0UdSoh0Z8AlGloK2&name=문수컨벤션웨딩홀&lon=129.2587&lat=35.53603'
    )
  }

  const handleKakaonavi = () => {
    window.open(
      'https://map.kakao.com/link/to/문수컨벤션웨딩홀,35.53603,129.2587'
    )
  }

  const handleNaver = () => {
    window.open(
      'http://app.map.naver.com/launchApp/?version=11&menu=navigation&elat=35.53603&elng=129.2587&etitle=문수컨벤션웨딩홀'
    )
  }

  return (
    <div className={classes.nav_list}>
      <ul>
        <li onClick={handleTmap}>
          <Image src={tmap} width={40} height={40} alt="" />
          티맵으로 길찾기
        </li>
        <li onClick={handleKakaonavi}>
          <Image src={kakaoNav} width={40} height={40} alt="" />
          카카오네비로 길찾기
        </li>
        <li onClick={handleNaver}>
          <Image src={naverNav} width={40} height={40} alt="" />
          네이버지도로 길찾기
        </li>
      </ul>
    </div>
  )
}
