// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSuccessfullyLogin = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailedLogin = msg => {
    this.setState({showErrorMsg: true, errorMsg: msg})
    console.log('failed')
  }

  onLoginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      this.onSuccessfullyLogin()
    } else {
      const errorMsg = await response.json()
      this.onFailedLogin(errorMsg.error_msg)
    }
    this.setState({username: '', password: ''})
  }

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-container">
        <div className="login-col-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div className="login-col-2">
          <div className="website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </div>

          <form onSubmit={this.onLoginSubmit}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="Username"
              placeholder="Username"
              value={username}
              onChange={this.onUsernameChange}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onPasswordChange}
            />
            <button type="submit">Login</button>
            {showErrorMsg && <p className="error-msg">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
