import React, { Component } from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

class LogInForm extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    submitLogIn(e) {
        e.preventDefault()
        let payload = {
            email: this.state.email,
            password: this.state.password
        }
        this.logInUser(payload)
    }

    logInUser(payload) {
        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
            .then(res => {
              return res.json()
            })
            .then(d => {
                this.props.authFunc(d)
            })
    }

    render() {
        let validPassword = this.state.password !== ''
        let validEmil = this.state.email !== ''
        let validObj = validationFunc (
            this.state.email,
            this.state.email,
            'K',
            this.state.password,
            this.state.password,
        )

       return (  
      <form onSubmit={this.submitLogIn.bind(this)}>
      <fieldset className='App'>
        <div style={{ display: 'inline-grid' }}>
          <h2>Log In</h2>
          <Input
            type='text'
            data='email'
            name='Email'
            func={e => {
              this.setState({ email: e.target.value })
            }}
            valid={validObj.validMail}
          />

          <Input
            type='password'
            data='password'
            name='Password'
            func={e => {
              this.setState({ password: e.target.value })
            }}
            valid={validObj.validPassword}
          />
       
          <input
            style={({ "display": validObj.validPassword && validObj.validMail === true ? '' : 'none' })}
            type='submit'
            value='LogIn'
          />
        </div>
      </fieldset>
      </form>
       ) 
    }
}

export default LogInForm