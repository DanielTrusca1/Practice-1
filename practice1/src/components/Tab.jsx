import React from "react";

import ReactDOM from "react-dom";

import { useState } from "react";

const Tab = ({
  initiallyActive = false,
  index,
  title,
  children,
  activeTab,
  setActiveTab,
}) => {
  const [portalContent, setPortalContent] = useState(null);

  const portal_root = document.getElementById("active_tab_content");

  const updateActiveTab = () => {
    console.log("Activate tab");
    const content = children;
    console.log(content);
    setPortalContent(content);
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
        (activeTab == index || (initiallyActive && activeTab == null)) &&
        ReactDOM.createPortal(portalContent, portal_root)}
    </div>
  );
};

export default Tab;
