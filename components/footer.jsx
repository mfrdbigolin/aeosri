export default function Footer () {
  return (
      <footer>
        <p>Copyright &copy; 2021 Matheus Fernandes Bigolin
          {' <'}mfrdrbigolin@disroot.org{'>'}.
        </p>

        <p>
          The content of this site is licensed under the{' '}
          <a href='https://creativecommons.org/licenses/by-sa/4.0/'>
            Creative Commons Attribution-ShareAlike 4.0 International (CC
            BY-SA 4.0)
          </a>,
          unless otherwise specified.
        </p>

        <p>Built with <a href='https://reactjs.org/'>React</a> and{' '}
          <a href='https://nextjs.org/'>Next.js</a>.
        </p>

        <p>Hosted by <a href='https://vercel.com/home/'>Vercel</a>.</p>

        <a href='https://github.com/mfrdbigolin'>
          <i className='fa fa-github' />
          mfrdbigolin
        </a>
      </footer>
  )
}
