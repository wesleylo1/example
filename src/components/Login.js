import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
  //Variables || State
  // const dog = ["dog", "cat", "bird"];
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');

  //Functions || Methods
 
 const handleSubmit = (e) => {
   e.preventDefault();
   
  axios({
   method: 'post',
   url: '/user/12345',
   data: {
    username: username,
    password: password
   }
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
 }

  // The HTML section - Actually JSX
  // ? How do I use javascript here?
  // {}
  return (
    <div>
      {/* {dog.map((word, index) => (
        <div key={index}>
           <h1>{word}</h1>
        </div>
      ))} */}

      <label htmlFor="username">Username:</label>
    <input onChange={e => setUsername(e.target.value)} value={username} type="text" id="username" placeholder="username" />
    

      <label htmlFor="password">Password</label>
    <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" />
    

      <button onClick={handleSubmit} id="login-button">Submit</button>
    </div>
  );
};

// export const Dog = () => {
//   return <></>;
// };
