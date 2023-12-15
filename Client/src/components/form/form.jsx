import React, { useState } from "react";
import validation from "../../utils/validation";


export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "Ingrese su email",
    password: "Ingrese su password",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className="form_container">
      

      <form className="form_container_form" onSubmit={handleSubmit}>
        {/*<label>Email: </label>*/}
        <input
          className="form_input"
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Ingresar email..."
          onChange={handleChange}
        />
        <p>{errors.email ? errors.email : null}</p>

        {/* <label>Password: </label> */}
        <input
          className="form_input"
          type="password"
          key="password"
          name="password"
          value={userData.password}
          placeholder="Ingresar password..."
          onChange={handleChange}
        />
        <p>{errors.password && errors.password}</p>
        

        <button 
        className="form_button"
        type="submit" 
        disabled={errors.email || errors.password}>
          {/* Enviar */}
          Submit
        </button>
      </form>
    </div>
  );
}
