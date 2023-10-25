import './App.css';
import React, { useState } from "react";
import theme from './Shared/Components/Theme';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import Background from './Shared/Components/BackGround';
import isValidProp from '@emotion/is-prop-valid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { H1 } from './Shared/Components/TextContent';
import { PrimaryButton } from './Shared/Components/Buttons';

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
    <>
      <StyleSheetManager shouldForwardProp={active => isValidProp(active)}>
        <ThemeProvider theme={theme[currentTheme]}>
          <Background className='App'>
            <H1>
                Theme Changing
            </H1>
            <PrimaryButton onClick={onThemeChangeButtonClicked}>To Change the Theme</PrimaryButton>
            <Main/>
          </Background>
        </ThemeProvider>
      </StyleSheetManager>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
