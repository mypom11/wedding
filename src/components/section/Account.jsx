import React, { useState } from 'react'

import classes from './Account.module.scss'
import { BottomSheetLayout } from '../layout/BottomSheetLayout'
import { Contact } from '../common/Contact'

export const Account = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('')

  const data = [
    {
      name: '민정기',
      num: '010-8787-4700',
      message: 'asdfasdf',
    },
    {
      name: '우윤서',
      num: '010-8788-1116',
      message: '',
    },
    {
      name: '박연남',
      num: '010-8935-7955',
      message: '',
      bank: '농협',
      account: '111',
    },
    {
      name: '우승연(우순노)',
      num: '010-3515-5580',
      message: '',
      bank: '농협',
      account: '111',
    },
  ]

  const bottomOpenHandler = (index) => {
    setSelected(data[index])
    setIsOpen(true)
  }

  return (
    <section className={classes.account_section}>
      <div className={classes.title}>
        <h3>마음 전하기</h3>
      </div>
      <ul className={classes.account_container}>
        <li onClick={() => bottomOpenHandler(0)}>신랑 연락처</li>
        <li onClick={() => bottomOpenHandler(2)}>신랑 혼주 계좌번호 확인</li>
        <li onClick={() => bottomOpenHandler(1)}>신부 연락처</li>
        <li onClick={() => bottomOpenHandler(3)}>신부 혼주 계좌번호 확인</li>
      </ul>

      <BottomSheetLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Contact
          name={selected.name}
          num={selected.num}
          bank={selected.bank}
          account={selected.account}
          message={selected.message}
        />
      </BottomSheetLayout>
    </section>
  )
}
