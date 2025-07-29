import { Tabs, Tab, TabsContainer, ActiveTabContent } from "./components";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabsContainer>
          <Tab title={"tab 1"}>content 1</Tab>
          <Tab title={"tab 2"}>content 2</Tab>
          <Tab title={"tab 3"}>content 3</Tab>
          <Tab title={"tab 4"}>content 4</Tab>
        </TabsContainer>
        <ActiveTabContent />
      </Tabs>
    </div>
  );
}

export default App;
