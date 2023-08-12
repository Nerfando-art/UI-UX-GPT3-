import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 Open AI</h1>
        <p>
          GPT-3 is a cutting edge language model that uses machine learning to produce human like text. It takes in a prompt, and attempts to complete it.
        </p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your email' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p>
            1600 people requested access to vist the site in 24 hours
          </p>
        </div> 
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header