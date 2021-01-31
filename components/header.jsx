import Image from 'next/image'

export default function Header () {
  return (
      <header>
        <a href='https://github.com/mfrdbigolin/aeosri'>
          <i className='fa fa-github'>On GitHub (source code)</i>
        </a>

        <div>
          <Image
            src='/assets/logo.png'
            alt='Logo'
            width={400}
            height={300}
          />
        </div>

        <h1>[ A E O S R I ]</h1>
      </header>
  )
}
