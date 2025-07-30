import { Tabs, Tab, TabsContainer, ActiveTabContent } from "./components";

import "./App.css";

import {
  AF,
  AC,
  BC,
  CC,
  LoggedAC,
  LoggedBC,
  LoggedCC,
} from "./reusable_logs/main.jsx";

function App() {
  return (
    <div className="App">
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

      <LoggedAC/>
      <LoggedBC/>
      <LoggedCC/>
    </div>
  );
}

export default App;
