import './App.css';
import React, { useState } from "react";
import Theme from './Shared/Components/Theme';
import Background from './Shared/Components/BackGround';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { H1 } from './Shared/Components/TextContent';
import { PrimaryButton } from './Shared/Components/Buttons';
import DashBoard from './Pages/Dashboard';
import TopNavigation from './Shared/Components/TopNavigation';
import AllPieCharts from './Pages/AllPieCharts';

function App() {

  const [currentTheme, setCurrentTheme] = useState("dark");

  function onThemeChangeButtonClicked(){
    if(currentTheme === "light"){
      setCurrentTheme("dark");
    }else{
      setCurrentTheme("light");
    }
    localStorage.setItem("current-theme", JSON.stringify(currentTheme));
  }

  return (
    <>
      <BrowserRouter>
          <Theme theme={currentTheme}>
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
          </Theme>
        <Routes>
          <Route exact path='/' element={<Main themeToUse={currentTheme}/>}/>
          <Route path='/dashboard' element={<DashBoard themeToUse={currentTheme}/>}/>
          <Route path='/home' element={<Main themeToUse={currentTheme}/>}/>
          <Route path='/piecharts' element={<AllPieCharts themeToUse={currentTheme}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
