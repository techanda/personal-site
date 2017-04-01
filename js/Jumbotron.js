import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const { string } = React.PropTypes
const Jumbo = React.createClass({
  propTypes: {
    header: string,
    message: string
  },
  render () {
    const { header, message } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <Jumbotron>
            <h1>{header}</h1>
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
