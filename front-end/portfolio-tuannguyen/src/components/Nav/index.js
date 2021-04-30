import { h } from 'preact'
import style from './style.scss'

import Logo from '../Logo'
import NavItem from '../NavItem'

const Nav = () =>
{
  return (
    <>
      <div class={style.nav}>
        <Logo />
        <NavItem />
      </div>
      </>
  )
}

export default Nav