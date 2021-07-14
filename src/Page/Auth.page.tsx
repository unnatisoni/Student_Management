import React, { memo } from "react";
import AuthHero from "../components/AuthHero";
import LoginPage from './Login.page';
import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import SignupPage from "./Signup.page";

interface Props{
}
const Auth: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
        <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
          
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>

        </Switch>
        <AuthHero></AuthHero>
        
    </div>
);
};

Auth.defaultProps = {
}

export default memo(Auth);