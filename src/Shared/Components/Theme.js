const lightTheme = {
    primary: "#003366",
    secondary: "#eee",
    border: "#878787",
    text: "#000",
    background: "#FFFFFF",
    fontcolor: "#000000",
    indicator: "#ccc",
  };

  const darktheme = {
    primary: "#00bcd4",
    secondary: "#f3f3f3",
    border: "#e0e0e0",
    text: "#fff",
    background: "#000000",
    fontcolor: "#FFFFFF",
    indicator: "#FFCC00",
  };


  const defaultTheme = {
    fontSize: {
      xs: "14px",
      sm: "16px",
      md: "18x",
      lg: "20px",
    },
    borderRadius: {
      small: "5px",
      medium: "10px",
      large: "15px",
      circle: "50%",
    },
    letterSpacing: {
      common: "1px",
    },
    colors: {
      primary: "#BF4F74",
      success: "mediumseagreen",
      danger: "red",
      warning: "darkorange",
      default: "royalblue",
    }
  };
  export const customizedTheme = {
    dark: {
      color: darktheme,
      ...defaultTheme,
    },
    light: {
      color: lightTheme,
      ...defaultTheme,
    },
  };

  export default customizedTheme;