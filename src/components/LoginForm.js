import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleNameChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let { username, password } = this.state

    if (!(username.length === 0) & !(password.length === 0)) {
      this.props.handleLogin( { username, password } );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
