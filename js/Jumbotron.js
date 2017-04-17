import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const { string } = React.PropTypes
const Jumbo = React.createClass({
  propTypes: {
    header: string,
    message: string
  },
  welcomeAnimation (selector, interval, callback) {
    window.setTimeout(() => {
      if (document.querySelectorAll(`${selector}.is-paused`).length > 0) {
        document.querySelectorAll(`${selector}.is-paused`)[0].classList.remove('is-paused')
        this.welcomeAnimation(selector, interval)
      } else {
        document.querySelectorAll('.letter.expanded-letter').forEach((element) => {
          window.setTimeout(() => {
            element.classList.remove('expanded-letter')
            window.setTimeout(() => {
              document.querySelectorAll('.jumbotron p').forEach((element) => {
                element.style.opacity = '1.0'
              })
              window.setTimeout(() => {
                document.querySelector('.downarrow img').style.opacity = 0.6
              }, 1200)
            }, 1200)
          }, interval * 5)
        })
      }
    }, interval)
  },
  componentDidMount () {
    // animation for welcome text of hero section
    const welcomeAnimation = this.welcomeAnimation

    // prepare header for animation by seperating the letters
    var message = this.props.header
    var letters = message.split('').map((letter) => {
      let empty
      if (letter === ' ') {
        empty = 'empty-letter'
      } else {
        empty = ''
      }
      return (
        `<span class='letter expanded-letter ${empty} is-paused'>${letter}</span>`
      )
    })

    // render prepared letters to the DOM
    var animation = `<div class='animation'>${letters.join('')}</div>`
    document.querySelector('.header').innerHTML = animation

    // animate welcome section on page load
    window.addEventListener('load', () => {
      welcomeAnimation('.letter', 400)
    })

    window.addEventListener('scroll', (event) => {
      // var breakRatio = window.innerWidth < 768 ? 2 : 1.25
      var element = document.querySelector('.downarrow img')
      var parent = element.parentElement
      var top = parent.getBoundingClientRect().top

      if (top <= 150) {
        element.style.opacity = 0.0
      }
    })
  },
  render () {
    const { message } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <Jumbotron>
            <h1><div className='header' /></h1>
            <p>
              {message}
            </p>
          </Jumbotron>
          <div className='downarrow'>
            <img src='/public/img/downTriangle.png' />
          </div>
        </div>
      </div>
    )
  }
})

export default Jumbo
