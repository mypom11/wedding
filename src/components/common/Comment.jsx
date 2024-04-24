import React from 'react'

import classes from './Comment.module.scss'

export const Comment = () => {
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
      </ul>
    </div>
  )
}
