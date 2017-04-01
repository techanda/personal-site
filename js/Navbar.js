import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Landing = React.createClass({
  componentDidMount () {
    document.querySelectorAll('nav li[role=presentation]').forEach((element) => {
      var target = element.querySelector('a').getAttribute('href')
      if (target.startsWith('#')) {
        console.log(target)
        element.addEventListener('click', () => {
          document.querySelector(`${target}`).scrollIntoView()
        })
      }
    })
  },
  render () {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='#'>{'{'}<span className='name'>tim.ramsier</span>{'}'}</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href='#aboutme'>About Me</NavItem>
            <NavItem eventKey={2} href='#'>My Skills</NavItem>
            <NavItem eventKey={3} href='#'>Contact Me</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

export default Landing
