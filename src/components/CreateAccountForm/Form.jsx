import emailIcon from "./../../utils/email-icon.png";
import lockIcon from "./../../utils/lock-icon.png";
import phoneIcon from "./../../utils/phone.png";
import eyeIcon from "./../../utils/eye-icon.png";
import "./createAccountForm.css";
import { useState } from "react";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (password) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    } else if (!strongPasswordRegex.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    } else {
      return "Strong password";
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  return (
    <div className="form-container-create-account">
      <form action="#" method="POST">
        <div className="input-box">
          <div className="input-box-container flex flex-row">
            <img src={emailIcon} alt="email icon" className="svg" />
            <div class="label-input-container flex flex-col">
              <label for="email" className="input-label">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                autocomplete="off"
                required
              />
            </div>
          </div>
        </div>

        <div className="input-box">
          <div className="input-box-container flex flex-row">
            <img src={phoneIcon} alt="email icon" className="svg" />
            <div class="label-input-container flex flex-col">
              <label for="email" className="input-label">
                Mobile Number
              </label>
              <input
                id="number"
                name="number"
                type="number"
                placeholder="Your mobile number"
                autocomplete="off"
                required
              />
            </div>
          </div>
        </div>

        <div className="input-box">
          <div className="input-box-container flex flex-row">
            <img src={lockIcon} alt="lock icon" className="svg" />
            <div className="label-input-container flex flex-col">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="off"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <small>{passwordStrength}</small>
            </div>
            <button type="button" onClick={togglePasswordVisibility}>
              <img src={eyeIcon} alt="eye icon" className="svg-eye" />
            </button>
          </div>
        </div>

        <div className="login-button-container flex flex-col">
          <button type="submit" class="login-button-create-account">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
