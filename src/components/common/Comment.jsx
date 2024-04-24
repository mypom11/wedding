import React, { useState } from 'react'
import classes from './Comment.module.scss'

export const Comment = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const emoji = ['❤️', '🙌', '👏', '😍', '🥰', '😘', '👰🏻‍♀️', '👩🏻‍❤️‍👨🏻', '💍']

  const handleComment = () => {
    const ask = confirm('댓글은 삭제가 불가능합니다. 전송하시겠습니까?')

    if (ask) {
    }
  }

  const handleEmojiComment = (index) => {
    const emojiDesc = emoji[index]
  }

  return (
    <div className={classes.comment_wrapper}>
      <div className={classes.header}>댓글</div>

      <ul className={classes.comment_list}>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={classes.comment_desc}>
            <img src="" alt="" />
            <div>
              <h5>
                민정기 <span>2024.05.01 14:00</span>
              </h5>
              <p>
                축하드려요~~~~asdfasdfasdfsadfsadfsadfsadfasdfsa
                dfsadfsadfsdafsadf
              </p>
            </div>
          </div>
        </li>
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
            />
            <button disabled={desc === ''} onClick={handleComment}>
              전송
            </button>
          </label>
        </div>
      </div>
    </div>
  )
}
