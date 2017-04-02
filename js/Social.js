import React from 'react'

const { string } = React.PropTypes

const Social = React.createClass({
  propTypes: {
    linkedin: string,
    facebook: string,
    github: string
  },
  render () {
    let linkedin
    let facebook
    let github
    if (this.props.linkedin) {
      linkedin = (
        <a href={this.props.linkedin}>
          <div className='social linkedin'>
            <i className='fa fa-linkedin fa-2x' aria-hidden='true' />
          </div>
        </a>
      )
    }
    if (this.props.facebook) {
      facebook = (
        <a href={this.props.facebook}>
          <div className='social facebook'>
            <i className='fa fa-facebook fa-2x' aria-hidden='true' />
          </div>
        </a>
      )
    }
    if (this.props.github) {
      github = (
        <a href={this.props.github}>
          <div className='social github'>
            <i className='fa fa-github fa-2x' aria-hidden='true' />
          </div>
        </a>
      )
    }
    return (
      <div className='section-break section-social'>
        {linkedin}
        {facebook}
        {github}
      </div>
    )
  }
})

export default Social
