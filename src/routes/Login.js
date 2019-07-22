import React from 'react';
import { Button, Input } from 'antd';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link} from 'react-router-dom';
const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  background: '#e5e5cc',
  width: '100%',
  height: '1200px',
  };
class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    const { token, refreshToken } = response.data.login;
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
  }

  render() {
    return (
      <div style={styles}>
          <br /><h1>Login</h1>
        <Input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} style={{width: "200px"}}/>
          <br/><br/>
        <Input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} style={{width: "200px"}}/>
        <br /><br/>
         <Button onClick={() => this.onSubmit()} type="primary">Login</Button> 
        {/* <span className="input-group-btn">
           <Link to="/dashboard" >Login </Link>
        </span> */}<br/>
        <span className="input-group-btn">
           <Link to="/register" >  New User?</Link>
        </span>
      </div>
    );
  }
}

const mutation = gql`
mutation ($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    refreshToken
  }
}
`;

export default graphql(mutation)(Login);