import { Tabs, Tab, TabsContainer, ActiveTabContent } from "./components";

import ReactDOM, { createPortal } from "react-dom";

import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="App">
      <Tabs>
        <TabsContainer>
          {isReady && (
            <>
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
            </>
          )}
        </TabsContainer>
        <ActiveTabContent />
      </Tabs>
    </div>
  );
}

export default App;
