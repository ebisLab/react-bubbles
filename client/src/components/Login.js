import React, {useState} from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  const [grabData, setGrabData] = useState({ username: 'Lambda School', password: 'i<3Lambd4'});
  const handleChange = event => setGrabData({...grabData, [event.target.name]: event.target.value})
  const handleSubmit = event => {
    console.log('handleSubmit button clicked')
      event.preventDefault();
      // submitFriend(friend);
  }




  // when you have handled the token, navigate to the BubblePage route
  return (
    <form onSubmit ={handleSubmit}>
            <input 
            type ="text" 
            name="username"
            placeholder="username" 
            value={grabData.username} 
            onChange={handleChange} />

<input 
            type ="password" 
            name="password"
            placeholder="password" 
            value={grabData.password} 
            onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
  );
};

export default Login;
