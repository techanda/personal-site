import React from 'react'
import SkillCard from './SkillCard'

const { func, shape, string, arrayOf } = React.PropTypes

const MySkills = React.createClass({
  propTypes: {
    fadeInSection: func,
    skills: arrayOf(shape({
      id: string,
      image: string,
      skill: string,
      description: string
    }))
  },
  componentDidMount () {
    this.props.fadeInSection('#myskills')
  },
  render () {
    const { skills } = this.props
    return (
      <div id='myskills' >
        <div className='container js-fade fade-in is-paused'>
          <h1>My Skills</h1>
          <div className='row'>
            <div className='SkillCards'>
              {skills.map((skill) => {
                return (
                  <SkillCard key={skill.id} {...skill} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default MySkills
