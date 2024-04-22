import { Account } from '@/components/section/Account'
import { Callendar } from '@/components/section/Callendar'
import { Gallery } from '@/components/section/Gallery'
import { Introduce } from '@/components/section/Introduce'
import { LocationPart } from '@/components/section/LocationPart'
import { VisualPart } from '@/components/section/VisualPart'
import React, { useEffect, useRef, useMemo } from 'react'
import { throttle } from 'loadsh'
import { Noto_Sans_KR } from 'next/font/google'

const notoSans = Noto_Sans_KR({ subsets: ['latin'] })

import classes from './MainLayout.module.scss'

export const MainLayout = ({ setHeaderOpen }) => {
  const mainContainerRef = useRef(null)
  const beforeScroll = useRef(0)

  const headerOpenHandler = useMemo(
    () =>
      throttle(() => {
        let currentScroll = mainContainerRef.current.scrollTop

        if (beforeScroll.current < currentScroll) {
          setHeaderOpen(false)
        } else {
          setHeaderOpen(true)
        }
        beforeScroll.current = currentScroll
      }, 250),
    [beforeScroll, setHeaderOpen]
  )

  useEffect(() => {
    if (!mainContainerRef.current) return

    mainContainerRef.current.addEventListener('scroll', headerOpenHandler)

    return () => {
      mainContainerRef.current.removeEventListener('scroll', headerOpenHandler)
    }
  }, [mainContainerRef])

  return (
    <main
      className={`${classes.main__layout} ${notoSans}`}
      ref={mainContainerRef}
    >
      <VisualPart />
      <Introduce />
      <Callendar />
      <Gallery />
      <LocationPart />
      <Account />
    </main>
  )
}
