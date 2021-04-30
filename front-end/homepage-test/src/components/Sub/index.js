import { h } from 'preact'
import style from './style.scss'

import {config} from '../../../site.config'

const Sub = () =>
{
  return (
    <>
      <div class={style.main}>
        <h2 class={style.main__title}>{config.titleServices}</h2>
        <ul class={style.main__list}>
          {config.services.map((photo) => {
            return (
              <li class={style.main__items}>
                <img class={style.main__photo} src={photo.src} />
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Sub