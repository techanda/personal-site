import React from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import AboutMe from './AboutMe'
import Social from './Social'
import MyValues from './MyValues'
import MySkills from './MySkills'

require('smoothscroll-polyfill').polyfill()

const { shape, string, arrayOf } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    skills: arrayOf(shape({
      id: string,
      image: string,
      skill: string,
      description: string
    }))
  },
  parallax (selector) {
    var paraScroll = (selector) => {
      document.querySelector(selector).style.top = `-${Math.round(window.scrollY / 3)}px`
    }
    window.addEventListener('scroll', (event) => {
      paraScroll(selector)
    })
  },
  fadeInSection (selector) {
    window.addEventListener('scroll', (event) => {
      var breakRatio = window.innerWidth < 768 ? 2 : 1.25
      var element = document.querySelector(`${selector} .js-fade`)
      var parent = element.parentElement
      var bottom = parent.getBoundingClientRect().bottom
      var pageBottom = window.scrollY + window.innerHeight
      if (pageBottom > (bottom + window.scrollY) / breakRatio) {
        document.querySelector(`${selector} .js-fade`).classList.remove('is-paused')
      }
    })
  },
  componentDidMount () {
    this.parallax('.parallax')
  },
  render () {
    const fadeInSection = this.fadeInSection
    const { skills } = this.props
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
              header='Hello.'
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
        <AboutMe fadeInSection={fadeInSection} />
        <MyValues fadeInSection={fadeInSection} />
        <MySkills fadeInSection={fadeInSection} skills={skills} />
      </div>
    )
  }
})

export default Landing
