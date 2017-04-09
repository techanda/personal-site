import React from 'react'
import Value from './Value'

const MyValues = React.createClass({
  componentDidMount () {
    window.addEventListener('scroll', (event) => {
      var breakRatio = window.innerWidth < 768 ? 2 : 1.25
      var element = document.querySelector('.myvalues .js-fade')
      var parent = element.parentElement
      var bottom = parent.getBoundingClientRect().bottom
      var pageBottom = window.scrollY + window.innerHeight
      if (pageBottom > (bottom + window.scrollY) / breakRatio) {
        document.querySelector('.myvalues .js-fade').classList.remove('is-paused')
      }
    })
  },
  render () {
    return (
      <div id='myvalues' className='myvalues'>
        <div className='container js-fade fade-in is-paused'>
          <h1>My Core Values</h1>
          <div className='row'>
            <Value
              image='book_outline.png'
              value='Curiosity'
              explanation=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit.'
            />
            <Value
              image='laptop_outline.png'
              value='Creativity'
              explanation=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit.'
            />
            <Value
              image='whiteboard_outline.png'
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
