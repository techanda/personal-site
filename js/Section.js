import React from 'react'

const { string, object } = React.PropTypes

const Section = React.createClass({
  propTypes: {
    content: object,
    title: string,
    gutterLeft: object,
    gutterRight: object,
    anchor: string
  },
  componentDidMount () {
    window.addEventListener('scroll', (event) => {
      var headshotBottom = document.querySelector('.js-fade').getBoundingClientRect().bottom
      var pageBottom = window.scrollY + window.innerHeight
      // console.log(`${Math.round(headshotBottom)} <> ${Math.round(pageBottom)}`)
      if (pageBottom > headshotBottom) {
        document.querySelector('.js-fade').classList.remove('is-paused')
      }
    })
  },
  render () {
    const { content, title, anchor } = this.props
    let gutterLeft
    let gutterRight
    if (this.props.gutterLeft) {
      gutterLeft = this.props.gutterLeft
    }
    if (this.props.gutterRight) {
      gutterRight = this.props.gutterRight
    }
    return (
      <div className='container-fluid'>
        <div className='row section js-fade fade-in is-paused'>
          <div className='hidden-xs col-sm-3 gutter-left'>
            {gutterLeft}
          </div>
          <div className='col-sm-6'>
            <section id={anchor}>
              <h2>{title}</h2>
              {content}
            </section>
          </div>
          <div className='hidden-xs col-sm-3 gutter-right'>
            {gutterRight}
          </div>
        </div>
      </div>
    )
  }
})

export default Section
