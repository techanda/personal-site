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
      var breakRatio = window.innerWidth < 768 ? 2.5 : 1.5
      var element = document.querySelector('.section .js-fade')
      var parent = element.parentElement
      var bottom = parent.getBoundingClientRect().bottom
      var pageBottom = window.scrollY + window.innerHeight
      if (pageBottom > bottom + window.scrollY / breakRatio) {
        document.querySelector('.section .js-fade').classList.remove('is-paused')
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
      <div className='section'>
        <div className='container'>
          <h1>{title}</h1>
          <div className='row js-fade fade-in is-paused'>
            <div className='hidden-xs col-sm-3 gutter-left'>
              {gutterLeft}
            </div>
            <div className='section-content'>
              <div className='col-sm-6'>
                <section id={anchor}>
                  {content}
                </section>
              </div>
            </div>
            <div className='hidden-xs col-sm-3 gutter-right'>
              {gutterRight}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Section
