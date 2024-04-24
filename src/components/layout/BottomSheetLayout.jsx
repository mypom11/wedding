import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import classes from './BottomSheetLayout.module.scss'

export const BottomSheetLayout = ({ children, isOpen, setIsOpen, style }) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = ReactDOM.createPortal(
    <>
      <BottomOverlay isOpen={isOpen} />
      <aside
        className={`${classes.bottom_sheet} ${isOpen ? classes.open : ''}`}
        style={style}
      >
        <AiOutlineClose
          className={classes.close}
          onClick={() => setIsOpen(false)}
        />

        {isOpen && children}
      </aside>
    </>,
    document.getElementById('bottom_sheet')
  )

  return portal
}

export const BottomOverlay = ({ isOpen }) => {
  const [isCSR, setIsCSR] = useState(false)

  useEffect(() => {
    setIsCSR(true)
  }, [])

  if (typeof window === 'undefined') return <></>
  if (!isCSR) return <></>

  const portal = ReactDOM.createPortal(
    <div className={`${classes.overlay} ${isOpen ? '' : classes.close}`}></div>,
    document.getElementById('overlay_drop')
  )

  return portal
}
