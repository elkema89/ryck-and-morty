import { useState } from "react";
import style from "./Form.module.css";

export default function Form({ login }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function validate() {
    let errors = {};

    if (!user.email) {
      errors.email = "ingrese un email";
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      errors.email = "email invalido";
    }
    if (user.email.length >= 35) {
      errors.email = "email invalido";
    }
    if (!/\d/.test(user.password)) {
      errors.password = "password debe contener al menos un numero";
    }
    if (user.password.length < 6 || user.password.length > 10) {
      errors.password = "contraseña debe tener entre 6 y 10 caracteres";
    }
    if (!user.password) {
      errors.password = "ingrese contraseña";
    }
    return errors;
  }

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email && !errors.password) {
      login(user);
    } else {
      alert("Datos incorrectos");
    }
  }

  return (
    <form className={style.container}>
      <div className={style.contain}>
        <h2>Ingresar</h2>
        <label>Email</label>
        <input
          placeholder="Ingrese su email"
          onChange={handleChange}
          value={user.email}
          type="email"
          name="email"
        />
        {errors.email ? <span>{errors.email}</span> : null}
        <label>Constraseña</label>
        <input
          onChange={handleChange}
          placeholder="Ingrese Contraseña"
          value={user.password}
          type="password"
          name="password"
        />
        {errors.password ? <span>{errors.password}</span> : null}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
}
