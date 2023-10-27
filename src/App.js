import './App.css';
import React, { useState } from "react";
import {customizedTheme} from './Shared/Components/Theme';
import Background from './Shared/Components/BackGround';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { H1 } from './Shared/Components/TextContent';
import { PrimaryButton } from './Shared/Components/Buttons';
import DashBoard from './Pages/Dashboard';
import TopNavigation from './Shared/Components/TopNavigation';
import AllPieCharts from './Pages/AllPieCharts';
import UserProfile from './Pages/UserProfile';
import { StyleSheetManager, ThemeProvider } from "styled-components";
import isValidProp from '@emotion/is-prop-valid';

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
    <StyleSheetManager shouldForwardProp={active => isValidProp(active)}>
      <ThemeProvider theme={customizedTheme[currentTheme]}>
        <BrowserRouter>
              <Background className='App'>
                <H1>
                  Top navigation
                </H1>
                <TopNavigation/>
                <H1>
                    Theme Changing
                </H1>
                <PrimaryButton onClick={onThemeChangeButtonClicked}>To Change the Theme</PrimaryButton>
              </Background>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route path='/dashboard' element={<DashBoard />}/>
            <Route path='/home' element={<Main />}/>
            <Route path='/piecharts' element={<AllPieCharts />}/>
            <Route path='/userprofile' element={<UserProfile />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
