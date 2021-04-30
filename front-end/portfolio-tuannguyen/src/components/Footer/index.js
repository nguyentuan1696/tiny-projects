import { h } from 'preact'
import style from './style.scss'

const Footer = () =>
{
  return (
    <>
    <div class={style.footer}>
      <p class={style.para}>
        Built with 💻 and <a href='https://preactjs.com/' target='_blank' rel='noreferrer'>PreactJS</a>{' '}
        </p>
      </div>
      </>
  )
}

export default Footer