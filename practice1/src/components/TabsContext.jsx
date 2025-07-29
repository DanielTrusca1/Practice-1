import React, { useState, createContext, useContext } from 'react';

export const TabsContext = createContext();

export const useTabs = () => useContext(TabsContext);
