const URL = 'https://jrivia-node.herokuapp.com/rest/users';

export const findAllUsers = () =>
  fetch(URL)
    .then(response => response.json());

export const deleteUser = (id) =>
    fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });

export const createUser = (user) => 
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());

export const findUserById = (id) =>
    fetch(`${URL}/id/${id}`)
      .then(response => response.json());

export const findUserByName = (name) =>
    fetch(`${URL}/username/${name}`)
      .then(response => response.json());

export const updateUser = (user) =>
      fetch(`${URL}/${user._id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());

export const login = (user) =>
      fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => response.json());
    
  
  
export default {
    findAllUsers, 
    deleteUser, 
    createUser, 
    findUserById,
    findUserByName,
    updateUser,
    login
};