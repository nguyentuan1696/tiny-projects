/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom'
import useCountDown from 'react-countdown-hook'

import Constant from '../../utilities/Constant'
import Validate from '../../utilities/Validate'

const ConfirmMobilePage = () => {
  let accProps = ''
  let mobileProps = ''
  let fromProps = ''
  let hasMobile = ''
  let isVietID = ''

  const [isLogin, , setLogin] = useState('')
  const [popUp, setPopUp] = useState(false)

      let tmp_mobile =
        fromProps === 'index' || fromProps === 'register' ? accProps : ''


  const hideKeyBoard = () => {
    let agent = window.navigator.userAgent
    if (agent.indexOf('Android') > -1) {
      window.KingIDSdk.onHideKeyBoard()
      window.ee.removeListener('show_keyboard')
    }
  }

  let dataState = {
    acc: accProps,
    mobile: mobileProps,
    from: fromProps,
    hasMobile: hasMobile,
  }

  if (isLogin.signal === 1) {
    return window.location.replace(
      isLogin.data ? isLogin.data : Constant.REDIRECT_URL
    )
  } else {
    let back = ''
    if (fromProps === 'addMobile') {
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/addMobile', state: dataState }}
          onClick={() => hideKeyBoard}
        >
          <img
            src='https://mingid.mediacdn.vn/king/image/back.png'
            alt=''
          ></img>
        </Link>
      )
    }

    if (fromProps === 'updateMobile') {
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/updateMobile', state: dataState }}
          onClick={() => hideKeyBoard}
        ></Link>
      )
    }

    if (fromProps === 'updateMobile') {
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/updateMobile', state: dataState }}
        ></Link>
      )
    }

    if (fromProps === 'updtateMobileInApple') {
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/updateMobileInApple', state: dataState }}
          onClick={() => hideKeyBoard}
        >
          <img
            src='https://mingid.mediacdn.vn/king/image/back.png'
            alt=''
          ></img>
        </Link>
      )
    }

    if (fromProps === 'register') {
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/registerAccount' }}
          onClick={() => hideKeyBoard}
        >
          <img
            src='https://mingid.mediacdn.vn/king/image/back.png'
            alt=''
          ></img>
        </Link>
      )
    }
    
    
      back = (
        <Link
          className='img-back'
          to={{ pathname: '/talk/index' }}
          onClick={() => hideKeyBoard()}
        >
          <img src='https://mingid.mediacdn.vn/king/image/back.png' alt='' />
        </Link>
      )
    


    let classImg =
      fromProps === 'register' || isVietID ? (
        <div className='img-logo marginT64'>
          <img src='https://mingid.mediacdn.vn/king/image/logo-vietid.png' alt=''></img>
        </div>
      ) : (
        ''
      )
    
    let classTitle = (fromProps === 'register' || isVietID) ? 'title marginT24' : 'title'
    let className = (popUp && (fromProps === 'addMobile' || fromProps === 'updateMobileApple')) ? 'modal-wrapper' : 'modal-wrapper display-none'

    return (
      <div className='wrapper-enter-otp'>
        {back}
        {classImg}

        <div className={classTitle}>
          Nhập mã OTP được gửi về Số điện thoại
          <span>{tmp_mobile ? tmp_mobile : mobileProps}</span>
        </div>
      </div>
    )
  }
}

export default ConfirmMobilePage
