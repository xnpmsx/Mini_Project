import React, { useState } from "react";
import "./Signin.css";
import { Link } from "react-router-dom";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "name":
        setName(value);
        break;
      case "surname":
        setSurname(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

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
                    value={username}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="regis-input-name">
                  Name
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="regis-input-name">
                  Surname
                  <input
                    type="text"
                    name="surname"
                    value={surname}
                    onChange={handleInputChange}
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
                    value={password}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="regis-input-email">
                  E-mail
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                //Phone
                <div className="regis-input-email">
                  Phone
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="regis-input-submit">
              <button>Register</button>
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
