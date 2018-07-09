/*
 src/App.js
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { simpleAction } from './actions/simpleAction'
import Grime from './components/Grime'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  simpleAction = event => {
    this.props.simpleAction()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Digital Grime Dice Playground</h1>
        </header>
        <Grime />
        <button onClick={this.simpleAction}>Test redux action</button>
        <p className="App-intro">
          Welcome to the world of non-transitive dice!
          <pre>{JSON.stringify(this.props)}</pre>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
