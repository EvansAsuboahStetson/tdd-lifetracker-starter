
import "./LoginForm.css";
export default function LoginForm() {
  return (
    <div className="login-form">
      <div className="input-field">
        <label>Email</label>
        <input placeholder="user@gmail.com" name="email" />
      </div>
      <div className="input-field">
        <label>Password</label>
        <input placeholder="password" name="password" />
          </div>
          
      <button class="btn">Login</button>
      <hr className="separator" />
    </div>
  );
}
