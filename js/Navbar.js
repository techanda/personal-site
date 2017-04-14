import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Landing = React.createClass({
  fadeNavBar (selector) {
    var fade = (selector, start, end) => {
      var element = document.querySelector(selector)
      var opacity = start
      var id = setInterval(() => {
        if ((opacity >= end && start < end) || (opacity <= end && start > end)) {
          clearInterval(id)
        } else {
          start < end ? opacity = opacity + 0.1 : opacity = opacity - 0.1
          if (start < end) {
            element.querySelector('.text-fade').classList.remove('fadeout')
          } else {
            element.querySelector('.text-fade').classList.add('fadeout')
          }
          element.style.background = `rgba(16, 16, 16, ${opacity})`
        }
      }, 50)
    }
    var navbarStatus = false
    document.querySelector(selector).style.background = 'rgba(16, 16, 16, 0.0)'

    window.addEventListener('scroll', (event) => {
      if (window.scrollY > 100) {
        if (!navbarStatus) {
          fade(selector, 0.0, 1.0)
          navbarStatus = true
        }
      } else {
        if (navbarStatus) {
          fade(selector, 1.0, 0.0)
          navbarStatus = false
        }
      }
    })
  },
  componentDidMount () {
    //  navbar animation
    this.fadeNavBar('.slide-top')
    // Handle local hash anchors
    document.querySelectorAll('nav li[role=presentation]').forEach((element) => {
      var target = element.querySelector('a').getAttribute('href')
      if (target.startsWith('#')) {
        element.addEventListener('click', () => {
          document.querySelector(`${target}`).scrollIntoView(
            {
              behavior: 'smooth',
              block: 'start'
            }
          )
        })
      }
    })
  },
  render () {
    return (
      <Navbar inverse collapseOnSelect fixedTop className='slide-top' id='top'>
        <Navbar.Header>
          <Navbar.Brand className='text-fade fadeout'>
            <Link to='#top'>
              {/* {'{'}<span className='name'>tim.ramsier</span>{'}'} */}
              <img className='brandImg' src='/public/img/tr_monogram.png' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#aboutme'>About Me</NavItem>
            <NavItem eventKey={2} href='#myvalues'>My Values</NavItem>
            <NavItem eventKey={3} href='#'>My Skills</NavItem>
            <NavItem eventKey={4} href='#'>Contact Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

export default Landing
