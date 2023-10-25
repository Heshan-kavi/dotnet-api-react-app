import React, {useEffect} from "react";
import Background from "../Shared/Components/BackGround";
import { H1 } from "../Shared/Components/TextContent";
import Theme from "../Shared/Components/Theme";

export default function DashBoard (){

    var currentTheme = 'light';

    useEffect(() => {
        currentTheme = JSON.parse(localStorage.getItem("current-theme"));
      }, []);
    
    return (
        <Theme theme={currentTheme}><Background><H1>hello</H1></Background></Theme>
    )
}