import React, { act, useEffect } from "react";

import ReactDOM from "react-dom";

import { useState } from "react";

import { useTabs } from "./TabsContext";

const Tab = ({ initiallyActive = false, index, title, children }) => {
  useEffect(() => {
    if (initiallyActive) {
      setPortalContent(children);
      setActiveTab(index);
    }
  }, []);

  const { activeTab, setActiveTab } = useTabs();

  const [portalContent, setPortalContent] = useState(null);

  console.log(activeTab, index);

  const portal_root = document.getElementById("active_tab_content");

  const updateActiveTab = () => {
    setPortalContent(children);
    setActiveTab(index);
  };

  return (
    <div
      className={
        "tab " +
        (activeTab == index || (initiallyActive && activeTab == null)
          ? "active_tab"
          : "")
      }
      onClick={updateActiveTab}
    >
      <h1>{title}</h1>
      {portal_root &&
        activeTab == index &&
        ReactDOM.createPortal(portalContent, portal_root)}
    </div>
  );
};

export default Tab;
