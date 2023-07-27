import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_USERS } from '../Graphql/Queries';
import { DELETE_USER } from '../Graphql/Mutations';

function ListofUsers() {
  const { data, loading } = useQuery(GET_ALL_USERS);

  const [delteUser, { error }] = useMutation(DELETE_USER);

  const executeDelete = (id: any): void => {
    delteUser({ variables: { id: id } });
  };

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {''}
              {user.name} / {user.username}
              <button
                onClick={() => {
                  executeDelete(user.id);
                }}
              >
                Delete user
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default ListofUsers;
