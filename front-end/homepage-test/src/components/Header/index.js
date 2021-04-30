import { h } from 'preact'
import style from './style.scss'
import { config } from '../../../site.config'

import Menu from '../Menu'

const Header = () => {
  return (
    <>
      <header class={style.header}>
        <Menu />
        <img src={config.heroBackgroundUrl} class={style.header__img} />
        <h1 class={style.header__title}>{config.heroTitle}</h1>
      </header>
    </>
  )
}

export default Header
