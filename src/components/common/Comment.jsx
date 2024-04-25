import React, { useEffect, useRef, useState } from 'react'
import classes from './Comment.module.scss'

import dayjs from 'dayjs'

import profile_1 from '@/assets/images/icons/profile_1.png'
import profile_2 from '@/assets/images/icons/profile_2.png'
import profile_3 from '@/assets/images/icons/profile_3.png'
import profile_4 from '@/assets/images/icons/profile_4.png'
import profile_5 from '@/assets/images/icons/profile_5.png'
import Image from 'next/image'

export const Comment = ({ data, newComment }) => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [commentList, setCommentList] = useState([])
  const ref = useRef(null)

  const emoji = ['❤️', '🙌', '👏', '😍', '🥰', '😘', '👰🏻‍♀️', '👩🏻‍❤️‍👨🏻', '💍']

  const handleEmojiComment = (index) => {
    const emojiDesc = emoji[index]
    setDesc(desc + emojiDesc)
  }

  const onComment = () => {
    const params = {
      id: data.file_index,
      name,
      message: desc,
    }
    newComment(params)
    setName('')
    setDesc('')
  }

  useEffect(() => {
    if (!data) return
    setCommentList(data.comment.reverse())
    ref.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [data])

  return (
    <div className={classes.comment_wrapper}>
      <div className={classes.header}>댓글</div>

      <ul className={classes.comment_list} ref={ref}>
        {commentList.map((comment, index) => (
          <li key={index}>
            <div className={classes.comment_desc}>
              <ProfileImg />
              <div>
                <h5>
                  {comment.name === '' ? '익명' : comment.name}
                  <span>
                    {dayjs(comment.regDate).format('YYYY.MM.DD HH:mm')}
                  </span>
                </h5>
                <p>{comment.message}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className={classes.input_box}>
        <ul>
          {emoji.map((emoticon, index) => (
            <li key={index} onClick={() => handleEmojiComment(index)}>
              {emoticon}
            </li>
          ))}
        </ul>
        <div>
          <label className={classes.name_label}>
            <input
              type="text"
              placeholder="이름을 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className={classes.desc_label}>
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="축하메세지를 입력해주세요."
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onComment()
                }
              }}
            />
            <button disabled={desc === ''} onClick={onComment}>
              전송
            </button>
          </label>
        </div>
      </div>
    </div>
  )
}

const ProfileImg = () => {
  const [ranNum, setRanNum] = useState(0)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {
    setRanNum(getRandomNumber(0, 4))
  }, [])

  const ranImg = [profile_1, profile_2, profile_3, profile_4, profile_5]
  return <Image src={ranImg[ranNum]} width={100} height={100} alt="" />
}
