import React from "react";
import dynamic from "next/dynamic";
import { Divider, IconButton } from "@mui/material";
import { GiWolfHowl } from "react-icons/gi";

import classes from "./Sidebar.module.scss";
const SidebarList = dynamic(() => import("./SidebarList"), { ssr: false });

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <IconButton>
          <GiWolfHowl size={30} />
        </IconButton>
        <p>Logo Name</p>
      </div>

      <div style={{ width: "100%" }}>
        <Divider />
      </div>

      <SidebarList />
    </div>
  );
}

export default Sidebar;
