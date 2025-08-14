'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function SpikyHeader() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    clsx('uppercase text-sm', {
      'underline': pathname === path,
    })

  return (
    <header className="sticky top-0 z-50 bg-violet-950 border-b border-white">
      <nav className="flex justify-between items-center p-4 max-w-5xl mx-auto">
        <div className="text-2xl font-bold tracking-widest text-white"><Link  href="/">MARLEN</Link></div>
        <ul className="flex space-x-6">
          <li><Link className={`${linkClass('/about')} text-white`} href="/about">About</Link></li>
          <li><Link className={`${linkClass('/archive')} text-white`} href="/archive">Archive</Link></li>
          <li><Link className={`${linkClass('/contact')} text-white`} href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}