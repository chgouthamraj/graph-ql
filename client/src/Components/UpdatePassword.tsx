import React, { useState } from 'react';
import { UPDATE_PASSWORD } from '../Graphql/Mutations';
import { useMutation } from '@apollo/client';

function UpdatePassword() {
  const [username, setUserName] = useState('');
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');

  const [updatePassword, { error }] = useMutation(UPDATE_PASSWORD);

  return (
    <div>
      <div>
        <div className="createUser">
          <input
            type="text"
            placeholder="username"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="oldpassword"
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="newpassword"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
          <button
            onClick={() => {
              updatePassword({
                variables: {
                  username: username,
                  oldpassword: oldpassword,
                  newpassword: newpassword,
                },
              });
            }}
          >
            update password
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdatePassword;
