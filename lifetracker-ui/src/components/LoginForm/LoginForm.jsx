import "./LoginForm.css";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function LoginForm({setAppState}) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    try {
      const res = await axios.post(`http://localhost:3001/auth/login`, form);
      if (res?.data) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/activity");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Invalid username/password combination",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form">
      {Boolean(errors.form) && <span className="error">{errors.form}</span>}
      <div className="input-field">
        <label>Email</label>
        <input
          placeholder="user@gmail.com"
          name="email"
          value={form.email}
          onChange={handleOnInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="input-field">
        <label>Password</label>
        <input
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleOnInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button  className="btn" disabled={isLoading} onClick={handleOnSubmit}>Login</button>
      <hr className="separator" />
    </div>
  );
}
