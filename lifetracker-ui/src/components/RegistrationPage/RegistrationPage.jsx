import RegistrationForm from "components/RegistrationForm/RegistrationForm";
import "./RegistrationPage.css";
export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="card">
        <h2>Register</h2>
        <br />
              <RegistrationForm />
              <div className="footer">
                  <p>Already Signed Up? Login</p>
              </div>
              
      </div>
    </div>
  );
}
