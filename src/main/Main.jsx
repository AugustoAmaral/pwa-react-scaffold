import React, { useState } from "react";
import TopBar from "./TopBar";
import NavigationDrawer from "./NavigationDrawer";
import navigationMenuList from "../config/navigationMenu";

const Main = ({ title, topBarButtons }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <NavigationDrawer
        open={isDrawerOpen}
        onOpen={() => setIsDrawerOpen(true)}
        onClose={() => setIsDrawerOpen(false)}
        list={navigationMenuList()}
      />
      <TopBar title={title} openNavDrawer={() => setIsDrawerOpen(true)} topBarButtons={topBarButtons} />
      Main Page
    </>
  );
};

export default Main;
