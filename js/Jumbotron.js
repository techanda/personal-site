import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const { string } = React.PropTypes
const Jumbo = React.createClass({
  propTypes: {
    header: string,
    message: string
  },
  componentDidMount () {
    var message = this.props.header
    var letters = message.split('').map((letter) => {
      let empty
      if (letter === ' ') {
        empty = 'empty-letter'
      }
      return (
        `<span class='letter expanded-letter ${empty} is-paused'>${letter}</span>`
      )
    })
    var animation = `<div class='animation'>${letters.join('')}</div>`
    document.querySelector('.hello').innerHTML = animation

    window.addEventListener('load', () => {
      welcomeAnimation('.letter', 400)
    })
    const welcomeAnimation = (selector, interval, callback) => {
      window.setTimeout(() => {
        if (document.querySelectorAll(`${selector}.is-paused`).length > 0) {
          document.querySelectorAll(`${selector}.is-paused`)[0].classList.remove('is-paused')
          welcomeAnimation(selector, interval)
        } else {
          document.querySelectorAll('.letter.expanded-letter').forEach((element) => {
            window.setTimeout(() => {
              element.classList.remove('expanded-letter')
              window.setTimeout(() => {
                document.querySelectorAll('.jumbotron p').forEach((element) => {
                  element.style.opacity = '1.0'
                })
              }, 1200)
            }, interval * 5)
          })
        }
      }, interval)
    }
  },
  render () {
    const { message } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <Jumbotron>
            <h1><div className='hello' /></h1>
            <p>
              {message}
            </p>
          </Jumbotron>
        </div>
      </div>
    )
  }
})

export default Jumbo
