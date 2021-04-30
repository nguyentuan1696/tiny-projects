import { h } from 'preact'
import style from './style.scss'
import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from 'react-icons/fa'

import { config } from '../../../site.config'

const Services = () => {
  return (
    <>
      <div class={style.services}>
        <div class={style.services__left}>
          <div class={style.services__left_form}>
            <div class={style.services__left_form_title}>
              <h3>get 15% off when you subscribe!</h3>
            </div>
            <div class={style.services__left_form_input}>
              <input />
              <button>Go</button>
            </div>
          </div>
          <div class={style.services__left_social}>
            <FaFacebook size='20px' class={style.icons} />
            <FaTwitter size='20px' class={style.icons} />
            <FaPinterestP size='20px' class={style.icons} />
            <FaInstagram size='20px' />
          </div>
        </div>
        <div class={style.services__right}>
          <div class={style.services__right_title}>customer care</div>
          <ul class={style.services__right_links}>{config.customerCare.map((link) =>
          {
            return (
              <li key={link.label}>
<a  href={link.link}> {link.label} </a>
              </li>
            )
          })}</ul>
        </div>
      </div>
    </>
  )
}

export default Services
