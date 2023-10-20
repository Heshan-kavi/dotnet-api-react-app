import './App.css';
import React from "react";
import TopNavigation from './Shared/Components/TopNavigation';
import {PrimaryButton, SecondaryButton, LoginButton, SignupButton} from './Shared/Components/Buttons';
import SideNavigation from './Shared/Components/SideNavigation';

function App() {

  return (
    <div className="App">
      <h1>
        Top navigation
      </h1>
      <TopNavigation/>
      <h1>
        Side navigation
      </h1>
      <SideNavigation/>
      <h1>
        Testing buttons
      </h1>
      <h2>
        Usual buttons
      </h2>
      <PrimaryButton>Primary Button</PrimaryButton>
      <h2>
        Second Usual buttons
      </h2>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <h2>
        Login button
      </h2>
      <LoginButton >Login Button</LoginButton>
      <h2>
        Signup button
      </h2>
      <SignupButton >Signup Button</SignupButton>
      <h1>
        Signup button
      </h1>
    </div>
  );
}

export default App;
