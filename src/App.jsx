import "./App.css";
import { Route, Switch } from "react-router-dom";
import ForgetPasswordPage from "./pages/forgetPassword.page";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/recover-password/:secretKey">
          <ForgetPasswordPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
