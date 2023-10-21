import './App.css';
import React, { useState } from "react";
import TopNavigation from './Shared/Components/TopNavigation';
import { H1, H2 } from './Shared/Components/TextContent';
import {PrimaryButton, SecondaryButton, LoginButton, SignupButton} from './Shared/Components/Buttons';
import SideNavigation from './Shared/Components/SideNavigation';
import theme from './Shared/Components/Theme';
import { ThemeProvider } from 'styled-components';

function App() {

  const [currentTheme, setCurrentTheme] = useState("dark");

  function onThemeChangeButtonClicked(){
    if(currentTheme === "light"){
      setCurrentTheme("dark");
    }else{
      setCurrentTheme("light");
    }
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <div className="App">
        <H1>
          Theme Changing
        </H1>
        <PrimaryButton onClick={onThemeChangeButtonClicked}>To Change the Theme</PrimaryButton>
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
    </ThemeProvider>
  );
}

export default App;
