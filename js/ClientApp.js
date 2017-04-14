import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import '../public/less/common.less'
import preload from '../public/skills.json'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={(props) => <Landing skills={preload.skills} {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
