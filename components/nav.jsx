import Link from 'next/link'

export default function Nav () {
  return (
      <nav>
        <Link href='/test'>
          <a>[Test]</a>
        </Link>
        <Link href='/about/javascript'>
          <a rel='jslicense'>[License information]</a>
        </Link>
      </nav>
  )
}
