import "./RegistrationForm.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function RegistrationForm({ setAppState }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "first_name") {
      if (form.first_name && form.first_name.length < 1) {
        setErrors((e) => ({
          ...e,
          first_name: "First Name Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, first_name: null }));
      }
    }

    if (event.target.name === "last_name") {
      if (form.last_name && form.last_name.length < 1) {
        setErrors((e) => ({
          ...e,
          last_name: "Last Name Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, last_name: null }));
      }
    }

    if (event.target.name === "username") {
      if (form.username && form.username.length < 1) {
        setErrors((e) => ({
          ...e,
          username: "User Name Field is Empty",
        }));
      } else {
        setErrors((e) => ({ ...e, username: null }));
      }
    }

    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
        username: form.username,
      });

      if (res?.data?.user) {
        console.log(res)
        setAppState( res.data );
        setIsLoading(false);
        navigate("/activity");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with registration",
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
    <div className="registration-form">
      {errors.form && <span className="error">{errors.form}</span>}
      <div className="input-field">
        <label>Email</label>
        <input
          placeholder="user@gmail.com"
          name="email"
          value={form.email}
          onChange={handleOnInputChange}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
      <div className="input-field">
        <label>Username</label>
        <input placeholder="your_username" name="username"   value={form.username}
              onChange={handleOnInputChange}/>
      </div>
      <div className="names-field">
        <div className="fname">
          <div className="input-field">
            <label>First Name</label>
            <input
              placeholder="First Name"
              name="first_name"
              value={form.first_name}
              onChange={handleOnInputChange}
            />
            {errors.first_name && (
              <span className="error">{errors.first_name}</span>
            )}
          </div>
        </div>
        <div className="lname">
          <div className="input-field">
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              name="last_name"
              value={form.last_name}
              onChange={handleOnInputChange}
            />
            {errors.last_name && (
              <span className="error">{errors.last_name}</span>
            )}
          </div>
        </div>
      </div>

      <div className="input-field">
        <label>Password</label>
        <input
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleOnInputChange}
        />
      </div>
      <div className="input-field">
        <label>Confirm Password</label>
        <input
          placeholder="Confirm Password"
          name="passwordConfirm"
          value={form.passwordConfirm}
          onChange={handleOnInputChange}
        />
        {errors.passwordConfirm && (
          <span className="error">{errors.passwordConfirm}</span>
        )}
      </div>
      <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
        {isLoading ? "Loading..." : "Create Account"}
      </button>
      <hr className="separator" />
    </div>
  );
}
