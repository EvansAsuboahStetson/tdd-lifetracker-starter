import "./RegistrationForm.css";
export default function RegistrationForm() {
  return (
    <div className="registration-form">
      <div className="input-field">
        <label>Email</label>
        <input placeholder="user@gmail.com" name="email" />
      </div>
      <div className="input-field">
        <label>Username</label>
        <input placeholder="your_username" name="username" />
      </div>
      <div className="names-field">
        <div className="fname">
          <div className="input-field">
            <label>First Name</label>
            <input placeholder="First Name" name="fname" />
          </div>
        </div>
        <div className="lname">
          <div className="input-field">
            <label>Last Name</label>
            <input placeholder="Last Name" name="lname" />
          </div>
        </div>
      </div>

      <div className="input-field">
        <label>Password</label>
        <input placeholder="password" name="password" />
      </div>
      <div className="input-field">
        <label>Confirm Password</label>
        <input placeholder="Confirm Password" name="confirm_password" />
          </div>
          <button class="btn">Create Account</button>
          <hr className="separator"/>
    </div>
  );
}
