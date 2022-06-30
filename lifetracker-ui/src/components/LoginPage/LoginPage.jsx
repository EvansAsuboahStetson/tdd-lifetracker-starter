import LoginForm from "components/LoginForm/LoginForm";
import "./LoginPage.css";
export default function LoginPage() {
  return (
    <div className="login-page">
      <div className="card">
        <h2>Login</h2>
        <br />
        <LoginForm />
          <div className="footer">
                  <p>Already Signed Up? Login</p>
              </div>
              
      </div>
    </div>
  );
}
