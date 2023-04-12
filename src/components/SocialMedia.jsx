import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/rogersalguero/">
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href="https://github.com/Rahlien">
            <BsGithub />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia