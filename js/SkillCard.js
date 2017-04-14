import React from 'react'

const { string } = React.PropTypes

const SkillCard = React.createClass({
  propTypes: {
    skill: string,
    image: string,
    description: string
  },
  render () {
    const { image, description } = this.props
    return (
      <div className='SkillCard'>
        <div className='SkillCardImage'>
          <img className='img-responsive' src={`/public/img/${image}`} />
        </div>
        <div className='SkillCardContent'>
          <p>
            {description}
          </p>
        </div>
      </div>
    )
  }
})

export default SkillCard
