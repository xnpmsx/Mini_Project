import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Signin = () => {
  
  //redirect
  const navigate = useNavigate();

  //set data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fname: '',
    surname: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    // Create an object to send as the request body
    const requestBody = {
      username: formData.username,
      password: formData.password,
      fname: formData.fname,
      surname: formData.surname,
      email: formData.email,
      phone: formData.phone,
    };

    // Send a POST request using Axios
    axios.post('http://localhost:3333/register', requestBody)
      .then((response) => {
        console.log('Response from the API:', response.data);
        // You can handle the API response data here
        alert("Signin complete");
        navigate('/Login');
      })
      .catch((error) => {
        if (error.response) {
          // Handle server response error
          setError(error.response.data.error);
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
          setError(error.response.data);
        } else if (error.request) {
          // Handle network error or server unresponsiveness
          console.error('Request made, but no response received:', error.request);
          setError('Network error - no response received');
        } else {
          // Handle request setup error
          console.error('Error setting up the request:', error.message);
          setError('Request setup error');
        }
      });
  };



  return (
    <>
      <div className="bg">
        <div className="img"></div>
        <form action="" method="post">
          <div className="regis">
            <h3>Register</h3>

            <div className="main">
              <div className="regis-input">
               
                <div className="regis-input-username">
                  Username
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="regis-input-name">
                  Name
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="regis-input-name">
                  Surname
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="regis-input2">
                <div className="regis-input-password">
                  Password
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="regis-input-email">
                  E-mail
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="regis-input-email">
                  Phone
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="regis-input-submit">
              <button onClick={handleSubmit}>Register</button>
              <div className="regis-input-submit-tologin">
                Already have account ? <Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};


export default Signin;
