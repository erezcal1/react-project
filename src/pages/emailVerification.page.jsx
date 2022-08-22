import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmailVerificationPage = () => {
  const { secretKey, iv, encryptedData } = useParams();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    axios
      .post(`/auth/emailVerification/${secretKey}/${iv}/${encryptedData}`)
      .then((res) => {
        console.log(res.data);
        setShow(true);
        timer = setTimeout(() => 10 * 1000);
        // history - redirect to login
      })
      .catch((err) => {
        console.log("err from axios", err);
      });
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return show ? (
    <div>
      <h1>
        verified <br /> wait 10 seconds
      </h1>
      or <Link to="/login">Click Here</Link>
    </div>
  ) : (
    <div>Loading or Somethings went wrong (check console)</div>
  );
};
export default EmailVerificationPage;
