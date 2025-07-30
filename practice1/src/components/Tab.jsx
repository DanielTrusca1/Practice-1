import React, { act, useEffect } from "react";

import ReactDOM from "react-dom";

import { useState, useRef } from "react";

import { useTabs } from "./TabsContext";

const Tab = ({ initiallyActive = false, title, children }) => {
  const { activeTab, setActiveTab } = useTabs();
  const [portalContent, setPortalContent] = useState(null);
  const portal_root = document.getElementById("active_tab_content");

  // Create a reference to the current <Tab> component
  const ref = useRef(null);

  const isActiveTab = activeTab == ref.current;

  // Set initially active tab
  useEffect(() => {
    if (initiallyActive) {
      setPortalContent(children);
      setActiveTab(ref.current);
    }
  }, []);

  const updateActiveTab = () => {
    setPortalContent(children);

    // Set active tab state to the actual <Tab> component
    setActiveTab(ref.current);
  };

  return (
    <div
      ref={ref}
      className={
        "tab " +
        (isActiveTab
          ? "active_tab"
          : "")
      }
      onClick={updateActiveTab}
    >
      <h1>{title}</h1>
      {portal_root &&
        isActiveTab &&
        ReactDOM.createPortal(portalContent, portal_root)}
    </div>
  );
};

export default Tab;
