import React from 'react';
import { Button, Input} from 'antd';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

    const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  background: '#e5e5cc',
  height: '1200px',
  };
class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    isAdmin: false,
  }

  onChange = (e) => {
    if (e.target.name === 'isAdmin') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state,
    });
    console.log(response);
  }

  render() {
    return (
      <div style={styles}>
          <br /><h1>Registration Form</h1>
        <Input
          name='username'
          placeholder='Username'
          onChange={e => this.onChange(e)}
          value={this.state.username} style={{width: "200px"}}/>
          <br/><br/>
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
          <br/><br/>
{/*         <Checkbox
          name='isAdmin'
          checked={this.state.isAdmin}
          onChange={e => this.onChange(e)}
        >
          Admin?
        </Checkbox> */}
        <br />
        <Button onClick={() => this.onSubmit()} type="primary">Register</Button>
      </div>
      
    );
  }
}

const mutation = gql`
mutation($username: String!, $email: String!, $password: String!, $isAdmin: Boolean) {
	register(username: $username, email: $email, password: $password, isAdmin: $isAdmin) {
	  id
	} 
}
`;

export default graphql(mutation)(Register);