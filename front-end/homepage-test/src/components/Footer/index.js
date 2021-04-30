import { h } from 'preact'
import style from './style.scss'

import {config } from '../../../site.config'

const Footer = () =>
{
  return (
    <>
      <footer class={style.footer}>
        <div class={style.footer__text}>
          <ul class={style.footer__list}>
            {config.footer.map((link) =>
            {
              return (
                <li key={link.label} class={style.footer__items}>
                  <a href={link.link}>{ link.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
    </footer>
    </>
  )
}

export default Footer