import React from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Social from './Social'
import MyValues from './MyValues'
require('smoothscroll-polyfill').polyfill()

const Landing = React.createClass({
  parallax (selector) {
    var paraScroll = (selector) => {
      document.querySelector(selector).style.top = `-${Math.round(window.scrollY / 3)}px`
    }
    window.addEventListener('scroll', (event) => {
      paraScroll(selector)
    })
  },
  componentDidMount () {
    this.parallax('.parallax')
  },
  render () {
    return (
      <div className='landing'>
        <Navbar />
        <div className='parallax'>
          <div className='background-image' />
          <div className='img-backdrop' />
        </div>
        <div className='hero-section'>
          <div className='vertical-align'>
            <Jumbotron
              header='I can do things!'
              message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            />
          </div>
        </div>
        <Social
          facebook='https://www.facebook.com/tim.ramsier'
          linkedin='https://www.linkedin.com/in/timothyramsier'
          github='https://github.com/timramsier'
        />
        <AboutMe />
        <MyValues />
      </div>
    )
  }
})

export default Landing
