import React from 'react'
import { BsLinkedin,BsGithub,BsDribbble } from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com"><BsLinkedin /></a>
      <a href="https://github.com"><BsGithub/></a>
      <a href="https://dribbble.com"><BsDribbble/></a>
    </div>
  )
}

export default HeaderSocials