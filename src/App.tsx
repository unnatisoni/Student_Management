import React from 'react';
import { BrowserRouter, Route , Redirect, Switch } from 'react-router-dom';
import AppContainerPage from './Page/AppContainer.page';
import AuthHero from './components/AuthHero';
import DashboardPage from './Page/Dashboard.page';
import LoginPage from './Page/Login.page';
import RecordingsPage from './Page/Recordings.page';
import SignupPage from './Page/Signup.page';
import AuthPage from './Page/Auth.page';
import NotFoundPage from './Page/NotFound.page';


function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route path="/" exact>
         <Redirect to= "./login"></Redirect>
       </Route>
       <Route path={["/Login", "/Signup"]} exact>
         <AuthPage></AuthPage>
       </Route>
       <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
         <AppContainerPage></AppContainerPage>
       </Route>
        <Route>
          <NotFoundPage />

        </Route>
      
      </Switch>
      </BrowserRouter>
      
  );
}

export default App;
