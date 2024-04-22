import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { toast } from 'react-toastify'
import classes from './Contact.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard/src'

export const Contact = ({ name, num, bank, account, message }) => {
  return (
    <div className={classes.contact_wrapper}>
      <h3>{name}</h3>
      <p>
        <a href={`tel:${num}`}>{num}</a>
      </p>
      {account && (
        <>
          <p>계좌번호</p>

          <h6>
            {bank} : {account}
            <CopyToClipboard
              text={account}
              onCopy={() => {
                toast.success('계좌번호를 복사했어요')
              }}
            >
              <button>
                <AiOutlineCopy />
              </button>
            </CopyToClipboard>
          </h6>
        </>
      )}
      <div className={classes.message_box}>{message}</div>
    </div>
  )
}
