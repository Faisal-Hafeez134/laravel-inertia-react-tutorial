import React from 'react'
import { Link } from '@inertiajs/react'

const Nav = () => {
  return (

    <ul>
      <Link href='/'> <li>home</li></Link>
      <Link href='/about'>   <li>about</li></Link>
      <Link href='/contact'>  <li>contact</li></Link>
      <Link href='/logout' method='post' as='button' data="{foo:'bar'}"  >  <li>logout</li></Link>


    </ul>
  )
}

export default Nav
