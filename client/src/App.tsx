import React, { useState } from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import CreateUser from './Components/CreateUser';
import ListofUsers from './Components/ListofUsers';
import UpdatePassword from './Components/UpdatePassword';

function App() {
  const clinet = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={clinet}>
      <CreateUser />
      <ListofUsers />
      <UpdatePassword />
    </ApolloProvider>
  );
}

export default App;
