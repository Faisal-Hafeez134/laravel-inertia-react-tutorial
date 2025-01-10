import React from 'react'
import { Link } from '@inertiajs/react'
import Nav from '../Shared/Nav'
const welcome = ({time}) => {
  return (
    <>
    <div>welcoyyhy7yme</div>

    <Nav />
<div className='mt-[1000px] text-center text-[70px]'>
    <div >time is : {time}</div>
    <Link href='/' as='button' className='text-center' preserveScroll>Refresh</Link></div>
    </>
  )
}

export default welcome
