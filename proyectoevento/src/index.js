import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:8090/graphql',
  cache: new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloClient client={client}>
    <App />
  </ApolloClient>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
