import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from './dojo-logo.png'

export default function () {
  return (
    <nav>
        <Image
          src={Logo}
          alt='Dojo help desk logo'
          width={70}
          quality={100}
          placeholder='blur'
          />
        <h1>Dojo HelpDesk</h1>
        <Link href="/">Dahboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
