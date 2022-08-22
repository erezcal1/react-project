import "./App.css";
import { Route, Switch } from "react-router-dom";
import ForgetPasswordPage from "./pages/forgetPassword.page";
import NewProductPage from "./pages/newProduct.page";
import RegisterUserPage from "./pages/register.page";
import EmailVerificationPage from "./pages/emailVerification.page";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/recover-password/:secretKey/:iv/:encryptedData">
          <ForgetPasswordPage />
        </Route>
        <Route path="/new-product">
          <NewProductPage />
        </Route>
        <Route path="/new-user">
          <RegisterUserPage />
        </Route>
        <Route path="/emailVerification/:secretKey/:iv/:encryptedData">
          <EmailVerificationPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
