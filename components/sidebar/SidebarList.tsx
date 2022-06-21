import React from "react";
import Link from "next/link";
import MediaQuery from "react-responsive";
import { BsCurrencyBitcoin, BsNewspaper } from "react-icons/bs";
import { MdOutlineHome, MdStarOutline, MdAutoGraph } from "react-icons/md";

import classes from "./SidebarList.module.scss";

function SidebarList() {
  return (
    <div>
      <MediaQuery minWidth={1024}>
        <div className={classes.sidebarList}>
          <div className={classes.sidebarListItem}>
            <MdOutlineHome size={27} />
            <span>Home</span>
          </div>
          <div className={classes.sidebarListItem}>
            <MdStarOutline size={27} />
            <Link href="/favorite">
              <span>favorite</span>
            </Link>
          </div>
          <div className={classes.sidebarListItem}>
            <MdAutoGraph size={27} />
            <span>Stock</span>
          </div>
          <div className={classes.sidebarListItem}>
            <BsCurrencyBitcoin size={27} />
            <Link href="/crypto">
              <span>crypto</span>
            </Link>
          </div>
          <div className={classes.sidebarListItem}>
            <BsNewspaper size={27} />
            <Link href="/news">
              <span>News</span>
            </Link>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1000}>
        <div className={classes.sidebarList}>
          <div className={classes.sidebarListItem}>
            <MdOutlineHome size={27} />
          </div>
          <div className={classes.sidebarListItem}>
            <MdStarOutline size={27} />
          </div>
          <div className={classes.sidebarListItem}>
            <MdAutoGraph size={27} />
          </div>
          <div className={classes.sidebarListItem}>
            <BsCurrencyBitcoin size={27} />
          </div>
        </div>
      </MediaQuery>
    </div>
  );
}

export default SidebarList;
