import React from "react";
import { ThemeContext } from "./theme-context";

class ThemedButton extends React.Component {
  render() {
    let myContext = this.context;
    let { themes, changeTheme } = myContext;
    return (
      <button
        onClick={changeTheme}
        style={{ backgroundColor: themes.background }}
      >
        Change Button
      </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
