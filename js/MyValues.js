import React from 'react'
import Value from './Value'

const { func } = React.PropTypes

const MyValues = React.createClass({
  propTypes: {
    fadeInSection: func
  },
  componentDidMount () {
    this.props.fadeInSection('#myvalues')
  },
  render () {
    return (
      <div id='myvalues' className='myvalues'>
        <div className='container js-fade fade-in is-paused'>
          <h1>My Core Values</h1>
          <div className='row'>
            <Value
              image='book_outline_56463e.png'
              value='Curiosity'
              explanation=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit.'
            />
            <Value
              image='laptop_outline_56463e.png'
              value='Creativity'
              explanation=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit.'
            />
            <Value
              image='whiteboard_outline_56463e.png'
              value='Growth'
              explanation=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit.'
            />
          </div>
        </div>
      </div>
    )
  }
})

export default MyValues
