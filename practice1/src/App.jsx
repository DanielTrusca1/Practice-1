import { Tabs, Tab, TabsContainer, ActiveTabContent } from "./components";

import "./App.css";

import {
  AF,
  BF,
  CF,
  AC,
  BC,
  CC,
  LoggedAC,
  LoggedBC,
  LoggedCC,
} from "./reusable_logs/main.jsx";

import InputForm from "./language_module/InputForm";
import { Button, GreenButton } from "./styled-components/Button.jsx";

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styled-components/theme.js";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {" "}
        <Tabs>
          <TabsContainer>
            <Tab title={"tab 1"}>
              <h1>content 1</h1>
            </Tab>
            <Tab title={"tab 2"} initiallyActive>
              <h1>content 2</h1>
            </Tab>
            <Tab title={"tab 3"}>
              <h1>content 3</h1>
            </Tab>
            <Tab title={"tab 4"}>
              <h1>content 4</h1>
            </Tab>
          </TabsContainer>
          <ActiveTabContent />
        </Tabs>
        <AF />
        <BF />
        <CF />
        <LoggedAC />
        <LoggedBC />
        <LoggedCC />
        <InputForm />
        <div className="styled-components-sandbox">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <p>Dark Mode</p>
          </label>

          <Button $variant="primary">Click me</Button>
          <Button $variant="secondary">Click me</Button>
          <Button $variant="danger">Click me</Button>

          <GreenButton>Custom Button</GreenButton>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
