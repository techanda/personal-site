import React from 'react'

const { string } = React.PropTypes

const Value = React.createClass({
  propTypes: {
    value: string,
    explanation: string,
    faIcon: string,
    glyphicon: string,
    image: string
  },
  render () {
    const { value, explanation } = this.props
    let glyphicon
    let faIcon
    let image
    if (this.props.image) {
      image = <img className='img-responsive' src={`/public/img/${this.props.image}`} />
    } else if (this.props.glyphicon) {
      glyphicon = <span className={`glyphicon ${this.props.glyphicon}`} aria-hidden='true' />
    } else if (this.props.faIcon) {
      faIcon = <i className={`fa ${this.props.faIcon}`} aria-hidden='true' />
    }
    return (
      <div className='value'>
        <div className='col-sm-4'>
          <div className='value-image'>
            {image}
            {glyphicon}
            {faIcon}
          </div>
          <div className='value-content'>
            <div className='arrow-down' />
            <h2>{value}</h2>
            <p>{explanation}</p>
          </div>
        </div>
      </div>
    )
  }
})

export default Value
