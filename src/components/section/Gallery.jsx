import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { IoGrid, IoBrowsersOutline } from 'react-icons/io5'
import classes from './Gallery.module.scss'
import photo_0 from '@/assets/images/signiture_1.jpg'
import photo_1 from '@/assets/images/black_1.jpg'
import photo_2 from '@/assets/images/main_1.jpg'
import photo_3 from '@/assets/images/black_2.jpg'
import photo_4 from '@/assets/images/main_2.jpg'
import photo_5 from '@/assets/images/signiture_2.jpg'
import Image from 'next/image'
import { BottomSheetLayout } from '../layout/BottomSheetLayout'
import { Comment } from '../common/Comment'

export const Gallery = () => {
  const [grid, setGrid] = useState(true)

  const photos = [photo_0, photo_1, photo_2, photo_3, photo_4, photo_5]

  const [isOpen, setIsOpen] = useState(false)

  const getGalleryData = async () => {
    const response = await fetch('api/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    console.log(data)
    if (!response.ok) {
      throw new Error(data.message || 'something wrong!')
    }
  }

  useEffect(() => {
    getGalleryData()
  }, [])
  return (
    <section className={classes.gallery_section}>
      <div className={classes.gallery_title}>
        <h3>GALLERY</h3>
        <ul className={classes.tab_selector}>
          <li
            onClick={() => setGrid(true)}
            className={grid ? classes.selected : ''}
          >
            <IoGrid />
          </li>
          <li
            onClick={() => setGrid(false)}
            className={!grid ? classes.selected : ''}
          >
            <IoBrowsersOutline />
          </li>
        </ul>
      </div>

      <div className={classes.gallery_grid}>
        <ul className={grid ? classes.grid : classes.normal}>
          {photos.map((photo, index) => (
            <PhotoComp
              img={photo}
              key={index}
              onClick={() => setGrid(false)}
              onComment={() => setIsOpen(!isOpen)}
            />
          ))}
        </ul>
      </div>

      <BottomSheetLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={{ height: '60vh' }}
      >
        <Comment />
      </BottomSheetLayout>
    </section>
  )
}

const PhotoComp = ({ img, onClick, onComment }) => {
  const [isLike, setIsLike] = useState(false)
  return (
    <li onClick={onClick}>
      <div className={classes.img_box}>
        <Image src={img} width={500} height={500} alt="" />
      </div>
      <div className={classes.like_container}>
        <div className={classes.icon_box}>
          <AiOutlineComment onClick={onComment} />

          {isLike ? (
            <AiFillHeart
              style={{ color: 'red' }}
              onClick={() => setIsLike(!isLike)}
            />
          ) : (
            <AiOutlineHeart onClick={() => setIsLike(!isLike)} />
          )}

          <p>좋아요 00개</p>
        </div>
      </div>
    </li>
  )
}
