import { Tabs, Tab, TabsContainer, ActiveTabContent } from "./components";

import ReactDOM from "react-dom";

import { useState } from "react";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="App">
      <Tabs>
        <TabsContainer>
          <Tab
            index={1}
            title={"tab 1"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <h1>content 1</h1>
          </Tab>
          <Tab
            index={2}
            title={"tab 2"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            initiallyActive
          >
            <h1>content 2</h1>
          </Tab>
          <Tab
            index={3}
            title={"tab 3"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <h1>content 3</h1>
          </Tab>
          <Tab
            index={4}
            title={"tab 4"}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          >
            <h1>content 4</h1>
          </Tab>
        </TabsContainer>
        <ActiveTabContent />
      </Tabs>
    </div>
  );
}

export default App;
