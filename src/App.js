/*
 src/App.js
*/

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { roll } from './actions/roll'
// import Grime from './components/Grime'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  roll = event => {
    this.props.roll([6, 20])
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Digital Grime Dice Playground</h1>
        </header>
        <button onClick={this.roll}>roll the dice!</button>
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
  roll: dice => dispatch(roll(dice))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
