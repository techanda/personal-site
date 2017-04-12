import React from 'react'

const Section = React.createClass({
  componentDidMount () {
    window.addEventListener('scroll', (event) => {
      var breakRatio = window.innerWidth < 768 ? 2 : 1.1
      var element = document.querySelector('.section .js-fade')
      var parent = element.parentElement
      var bottom = parent.getBoundingClientRect().bottom
      var pageBottom = window.scrollY + window.innerHeight
      if (pageBottom > (bottom + window.scrollY) / breakRatio) {
        document.querySelector('.section .js-fade').classList.remove('is-paused')
      }
    })
  },
  render () {
    return (
      <div className='section'>
        <div className='container'>
          <div className='js-fade fade-in is-paused'>
            <h1 id='aboutme'>About Me</h1>
            <div className='row'>
              <div className='hidden-xs col-sm-3 gutter-left'>
                <div className='headshot'>
                  <img className='img-responsive' src='../../public/img/tim_headshot.png' />
                </div>
              </div>
              <div className='section-content'>
                <div className='col-sm-6'>
                  <section>
                    <article>
                      <h2>Who I am</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                    </article>
                  </section>
                </div>
              </div>
              <div className='hidden-xs col-sm-3 gutter-right' />
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Section
