import React from 'react'
import Parse from 'parse'

class Login extends React.Component {

  render() {
    return (
      <div id='login'>
        <div className='login-container'>
        	<input type='text' ref='emailInput' placeholder='Username'/>
        	<input type='password' ref='passwordInput' placeholder='Password'/>
        	<button className='submit login' onClick={this.onLogin.bind(this)}> Login </button>
        	<button className='submit signup' onClick={this.onSignup.bind(this)}> new user </button>
          <p>Demo account: demo/demo</p>
      	</div>
      </div>
    )
  }

  onLogin() {
    const email = this.refs.emailInput.value
    const password = this.refs.passwordInput.value
    Parse.User.logIn(email, password).then(() => {
      this.props.history.replace('/')
    }, (error) => {
      console.log(error)
    })
  }

  onSignup() {
    const email = this.refs.emailInput.value
    const password = this.refs.passwordInput.value
    Parse.User.signUp(email, password).then(() => {
      this.props.history.replace('/')
    }, (error) => {
      console.log(error)
    })
  }
}

export default Login
