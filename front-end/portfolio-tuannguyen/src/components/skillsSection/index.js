import { h } from 'preact'
import style from './style.scss'

const SkillsSection = () => {
  return (
    <>
      <div class={`style.skills margin-bottom-large`}>
        <div class={style.heading} id='skills'>
          <h2 class={`heading-section`}>My skills</h2>
        </div>
        <div class={style.skills__content}>
          <p>
            <span class={style.para_sub}>
              {' '}
              I have a solid understanding on{' '}
            </span>
            <span class={style.para_main}>HTML, CSS, Javascript</span>
          </p>
          <p>
            <span class={style.para_sub}>Basic knowledge on</span>
            <span class={style.para_main}>ReactJS, NodeJS</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default SkillsSection
