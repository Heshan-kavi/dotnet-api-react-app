import './App.css';
import React, { useState } from "react";
import { TopNavigation, AnchorTag } from './Shared/Components/TopNavigation';
import {PrimaryButton, SecondaryButton, LoginButton, SignupButton} from './Shared/Components/Buttons';
import SideNavigation from './Shared/Components/SideNavigation';
import * as FaIcons from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <h1>
        Top navigation
      </h1>
      <TopNavigation>
        <AnchorTag href="#news">toggle</AnchorTag>
        <AnchorTag href="#news">news</AnchorTag>
        <AnchorTag href="#news">about</AnchorTag>
        <AnchorTag href="#news">help</AnchorTag>
      </TopNavigation>
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
