import React from "react";
import { H1, H2, P } from '../Shared/Components/TextContent';
import { PrimaryButton, SecondaryButton, LoginButton, SignupButton } from '../Shared/Components/Buttons';
import SideNavigation from '../Shared/Components/SideNavigation';
import Theme from "../Shared/Components/Theme";
import Background from "../Shared/Components/BackGround";

export default function Main (props){

    const currentTheme = props.themeToUse;

    return (
        <Theme theme={currentTheme}>
            <Background>
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
                </H1>
            </Background>
        </Theme>
    )
}