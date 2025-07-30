import { useState } from "react";

import { TabsContext } from './TabsContext';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;
