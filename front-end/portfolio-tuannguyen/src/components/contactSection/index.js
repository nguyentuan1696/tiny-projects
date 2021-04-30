import { h } from 'preact'
import style from './style.scss'

const data = [
  {
    name: 'logo-linked',
    link: 'https://www.linkedin.com/in/tuan-nguyen-763a2112b/',
    source: '../../assets/logo-linkedin.svg',
  },
  {
    name: 'logo-github',
    link: 'https://github.com/nguyentuan1696/tiny-projects',
    source: '../../assets/logo-github.svg',
  },
  {
    name: 'logo-skype',
    link: 'https://join.skype.com/invite/lohN5EIe7hVW',
    source: '../../assets/logo-skype.svg',
  },
]

const ContactSection = () => {
  return (
    <>
      <div class={style.contact}>
        <div class={style.heading} id='contact'>
          <h2 class={`heading-section`}>get in touch</h2>
        </div>
        <div class={style.main}>
          <div class={style.content}>
            Whether you’re trying to build your business for an exit are looking
            for new ways to scale. I’m here to help you and your business grow.{' '}
          </div>
          <div class={style.info}>
            <div class={style.info__title}>
              <p>Follow me</p>
            </div>
            <div class={style.info__icons}>
              <ul class={style.info__icons__list}>
                {data.map((d) => {
                  return (
                    <li key={d.name}>
                      <a
                        href={d.link}
                        target='_blank'
                        rel=' noopener noreferrer'
                      >
                        <img src={d.source} alt={d.name} />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSection
