import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from 'react-icons/ai'
import { IoGrid, IoBrowsersOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
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
  const [photoData, setPhotoData] = useState([])
  const [selectedComment, setSelectedComment] = useState(0)

  const photos = [photo_0, photo_1, photo_2, photo_3, photo_4, photo_5]

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenComment = (index) => {
    setIsOpen(!isOpen)
    setSelectedComment(index)
  }

  const handleComment = async (params) => {
    const ask = confirm('댓글은 삭제가 불가능합니다. 전송하시겠습니까?')

    if (ask) {
      const response = await fetch('api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
      if (!response.ok) {
        throw new Error(data.message)
      }
      toast.success('축하해주셔서 감사합니다.')
      getGalleryData()
    }
  }

  const handleLike = async (file_index, num) => {
    const params = {
      id: file_index,
      num,
    }
    const response = await fetch('api/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    if (!response.ok) {
      throw new Error(data.message)
    }

    getGalleryData()
  }

  const getGalleryData = async () => {
    const response = await fetch('api/gallery', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'something wrong!')
      return
    }
    setPhotoData(data.data)
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
          {photoData.map((photo, index) => (
            <PhotoComp
              img={photos[index]}
              key={index}
              data={photo}
              onLike={handleLike}
              onClick={() => setGrid(false)}
              onComment={() => handleOpenComment(index)}
            />
          ))}
        </ul>
      </div>

      <BottomSheetLayout
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        style={{ height: '60vh' }}
      >
        <Comment data={photoData[selectedComment]} newComment={handleComment} />
      </BottomSheetLayout>
    </section>
  )
}

const PhotoComp = ({ img, onClick, onComment, data, onLike }) => {
  const [isLike, setIsLike] = useState(false)

  const handleLike = () => {
    if (isLike) {
      onLike(data.file_index, data.like - 1)
      toast.success('좋아요를 취소했습니다.')
    } else {
      onLike(data.file_index, data.like + 1)
      toast.success('좋아요를 눌렀습니다.')
    }
    setIsLike(!isLike)
  }

  const { like } = data
  return (
    <li onClick={onClick}>
      <div className={classes.img_box}>
        <Image src={img} width={500} height={500} alt="" />
      </div>
      <div className={classes.like_container}>
        <div className={classes.icon_box}>
          <AiOutlineComment onClick={onComment} />

          {isLike ? (
            <AiFillHeart style={{ color: 'red' }} onClick={handleLike} />
          ) : (
            <AiOutlineHeart onClick={handleLike} />
          )}

          <p>좋아요 {like}개</p>
        </div>
      </div>
    </li>
  )
}
