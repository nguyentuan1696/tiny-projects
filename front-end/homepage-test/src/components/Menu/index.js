import { h } from 'preact'
import { useState } from 'preact/hooks'
import { FaBars } from 'react-icons/fa'
import style from './style.scss'

import { config } from '../../../site.config'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <nav class={style.navigation}>
        
        <ul class={style.navigation__list}>
          {config.headerMenu.map((menu) => {
            return (
              <li key={menu.label} class={style.navigation__items}>
                <a href={menu.link} target="_blank rel='noopener noreferrer">
                  {menu.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Menu
