import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import 'antd/dist/antd.css';
import Routes from './routes';



const client = new ApolloClient({
    link: createHttpLink({ uri: 'http://localhost:3000/graphql' }),
    
  });

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));