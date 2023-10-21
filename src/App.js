import './App.css';
import React from "react";
import TopNavigation from './Shared/Components/TopNavigation';
import { H1, H2 } from './Shared/Components/TextContent';
import {PrimaryButton, SecondaryButton, LoginButton, SignupButton} from './Shared/Components/Buttons';
import SideNavigation from './Shared/Components/SideNavigation';

function App() {

  return (
    <div className="App">
      <H1>
        Top navigation
      </H1>
      <TopNavigation/>
      <H1>
        Side navigation
      </H1>
      <SideNavigation/>
      <H1>
        Testing buttons
      </H1>
      <H2>
        Usual buttons
      </H2>
      <PrimaryButton>Primary Button</PrimaryButton>
      <H2>
        Second Usual buttons
      </H2>
      <SecondaryButton>Secondary Button</SecondaryButton>
      <H2>
        Login button
      </H2>
      <LoginButton >Login Button</LoginButton>
      <H2>
        Signup button
      </H2>
      <SignupButton >Signup Button</SignupButton>
    </div>
  );
}

export default App;
