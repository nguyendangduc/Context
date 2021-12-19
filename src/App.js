import React from "react";
import { ThemeContext, themes } from "./theme-context";
import ThemedButton from "./themed-button";

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return <ThemedButton>Change Theme</ThemedButton>;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    const passContext = {
      themes: this.state.theme,
      changeTheme: this.toggleTheme
    };
    return (
      <>
        <ThemeContext.Provider value={passContext}>
          <Toolbar />
        </ThemeContext.Provider>
      </>
    );
  }
}
