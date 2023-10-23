import './App.css';
import React, { useState } from "react";
import TopNavigation from './Shared/Components/TopNavigation';
import { H1, H2, P } from './Shared/Components/TextContent';
import {PrimaryButton, SecondaryButton, LoginButton, SignupButton} from './Shared/Components/Buttons';
import SideNavigation from './Shared/Components/SideNavigation';
import theme from './Shared/Components/Theme';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import Background from './Shared/Components/BackGround';
import isValidProp from '@emotion/is-prop-valid';
import {  TwoLevelPieChart, 
          StraightAnglePieChart, 
          CustomActiveShapePieChart, 
          PieChartWithCustomizedLabel,
          PieChartWithPaddingAngleFull,
          PieChartWithPaddingAngleHalf} from './Shared/Components/Charts/PieChart';
import { Grid } from './Shared/Components/Grid';

function App() {

  const [currentTheme, setCurrentTheme] = useState("dark");
  const [columns, setColumns] = useState(3);
  const [rowheight, setRowheight] = useState('400px');

  function onThemeChangeButtonClicked(){
    if(currentTheme === "light"){
      setCurrentTheme("dark");
    }else{
      setCurrentTheme("light");
    }
  }

  return (
    <StyleSheetManager shouldForwardProp={active => isValidProp(active)}>
      <ThemeProvider theme={theme[currentTheme]}>
        <Background className='App'>
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
          <H1>
            Testing paragraph
          </H1>
          <P>
            this is the testing paragraph of this application
          </P>
          <H1>
            Charts
          </H1>Piecharts
          <Grid columns={columns} rowheight={rowheight}>
            <div style={{marginBottom: 0}}>
              <p>Two Level Pie Chart</p>
              <TwoLevelPieChart width="500" height="400"></TwoLevelPieChart>
            </div>
            <div style={{marginBottom: 0}}>
              <p>Straight Angle Pie Chart</p>
              <StraightAnglePieChart width="500" height="400"></StraightAnglePieChart>
            </div>
            <div style={{marginBottom: 0}}>
              <p>Custom Active Shape Pie Chart</p>
              <CustomActiveShapePieChart width="500" height="400"></CustomActiveShapePieChart>
            </div>
            <div style={{marginBottom: 0}}>
              <p>Customized Labled Pie Chart</p>
              <PieChartWithCustomizedLabel width="500" height="400"></PieChartWithCustomizedLabel>
            </div>
            <div style={{marginBottom: 0}}>
              <p>Pie Chart With Padding - Full </p>
              <PieChartWithPaddingAngleFull width="500" height="400"></PieChartWithPaddingAngleFull>
            </div>
            <div style={{marginBottom: 0}}>
              <p>Pie Chart With Padding - Half</p>
              <PieChartWithPaddingAngleHalf width="500" height="400"></PieChartWithPaddingAngleHalf>
            </div>
        </Grid>
        </Background>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
