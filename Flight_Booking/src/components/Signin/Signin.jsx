import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
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
    // You can now send the formData to an API or perform other actions.
  };
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case "username":
  //       setUsername(value);
  //       break;
  //     case "name":
  //       setName(value);
  //       break;
  //     case "surname":
  //       setSurname(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "phone":
  //       setPhone(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const register = () => {
  //   // Data
  //   var registerData = {
  //     username: username,
  //     password: password,
  //     fname:  name,
  //     surname: surname,
  //     email:  email,
  //     phone: phone,
  //   };

  //   console.log(registerData);
  //   alert(registerData);
  // };

  //Bliding data

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
                    name="name"
                    value={formData.name}
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
                //Phone
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
