import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ForgetPasswordPage = () => {
  const { secretKey } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      //! Joi validation
      axios
        .post(`/auth/recover-password/${secretKey}`, {
          password: password,
          confirmPassword: confirmPassword,
        })
        .then((res) => {
          console.log(res.data);
          // history - redirect to login
        })
        .catch((err) => {
          console.log("err from axios", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confPassword"
          value={confirmPassword}
          onChange={handleConfPasswordChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default ForgetPasswordPage;
