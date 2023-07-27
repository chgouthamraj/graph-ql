import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../Graphql/Mutations';

function CreateUser() {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [createUser, { error }] = useMutation(CREATE_USER);

  return (
    <div>
      <div className="createUser">
        <input
          type="text"
          placeholder="name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                name: name,
                username: username,
                password: password,
              },
            });
          }}
        >
          create user
        </button>
      </div>
    </div>
  );
}

export default CreateUser;
