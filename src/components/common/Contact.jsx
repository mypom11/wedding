import React from 'react'
import { toast } from 'react-toastify'
import classes from './Contact.module.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard/src'

export const Contact = ({ name, num, bank, account }) => {
  return (
    <div className={classes.contact_wrapper}>
      <h3>{name}</h3>
      <p>
        <a href={`tel:${num}`}>{num}</a>
      </p>
      {account && (
        <>
          <CopyToClipboard
            text={account}
            onCopy={() => {
              toast.success('계좌번호를 복사했어요')
            }}
          >
            <button>
              <p>
                {bank} : {account}
              </p>
            </button>
          </CopyToClipboard>
        </>
      )}
    </div>
  )
}
