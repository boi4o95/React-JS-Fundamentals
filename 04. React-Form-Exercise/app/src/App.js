import React, { Component } from 'react'
import './App.css'

import SingUpForm from './components/form/SingUpForm'
import LogInForm from './components/form/LogInForm';
import Index from './components/form';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      token: ''
    }

    this.autenticate = (data) => {
      if (data.success) {
        this.setState({ token: data.token, username: data.user.name })
        localStorage.setItem("token", data.token)
      }
    }
  }

  componentDidMount() {
    this.setState({ token: localStorage.getItem("token") })
  }

  render() {
    if(this.state.token !== '' && this.state.token !== 'undefind' && typeof(localStorage.token) !== 'undefined') {
      return (
        <div>
          <Index />
        </div>
      )
    }

    return (
      <div>
        <SingUpForm />
        <LogInForm authFunc={this.autenticate} />
      </div>
    )

  }
}

export default App
