import React from 'react'
// import { Link } from 'react-router'

const Footer = React.createClass({
  render () {
    return (
      <div id='footer'>
        <div className='container'>
          <div className='row'>
            <span className='footer footer-left'>
              <a href='#'><i className='fa fa-linkedin' aria-hidden='true' /></a>
              <a href='#'><i className='fa fa-facebook' aria-hidden='true' /></a>
              <a href='#'><i className='fa fa-github' aria-hidden='true' /></a>
            </span>
            <span className='footer footer-right'>
              © 2017 Tim Ramsier
            </span>
          </div>
        </div>
      </div>
    )
  }
})

export default Footer
