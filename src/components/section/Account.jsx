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
      bank: '신한',
      account: '110-271-925844',
    },
    {
      name: '우윤서',
      num: '010-8788-1116',
      bank: '신한',
      account: '110-448-691423',
    },
    {
      name: '박연남',
      num: '010-8935-7955',
      bank: '농협',
      account: '302-8935-7955-11',
    },
    {
      name: '우승연(우순노)',
      num: '010-3515-5580',
      bank: '신한',
      account: '110-040-910304',
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
        <li onClick={() => bottomOpenHandler(0)}>신랑 계좌번호 확인</li>
        <li onClick={() => bottomOpenHandler(2)}>신랑 혼주 계좌번호 확인</li>
        <li onClick={() => bottomOpenHandler(1)}>신부 계좌번호 확인</li>
        <li onClick={() => bottomOpenHandler(3)}>신부 혼주 계좌번호 확인</li>
      </ul>

      <div className={classes.ending}>
        <p>
          이 청첩장은 신랑과 신부가 <b>직접 만든 청첩장</b>입니다.
        </p>
        <p>축복해주신 마음 평생 잊지 않고 행복하게 살겠습니다.</p>
      </div>
      <address>copyrightⓒ2024 민정기❤️우윤서. All rights reserved </address>

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
