import React from 'react'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Section from './Section'
import AboutMe from './content/AboutMe'
import Headshot from './content/Headshot'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <Navbar />
        <div className='background-image'>
          <div className='grain-overlay' />
          <Jumbotron
            header='I can do things!'
            message='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        </div>
        <Section
          anchor='aboutme'
          content={<AboutMe />}
          title='About Me'
          gutterLeft={<Headshot />}
        />
      </div>
    )
  }
})

export default Landing
