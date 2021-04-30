import { h } from 'preact'
import style from './style.scss'

const NavItem = () =>
{
  return (
    <>
      <div class={style.nav}>
        <ul>
          <li><a href='#'>Bio</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      </>
  )
}

export default NavItem