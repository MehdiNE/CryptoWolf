import React, { useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import classes from "../styles/HomeFeed.module.scss";
import HomeTrending from "./HomeTrending";
import { getTrendingCoins } from "../api/coinApi";

function HomeFeed() {
  const { data } = useQuery("trending", getTrendingCoins);

  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <h1>dashboard</h1>
        <div>
          <p>avatar</p>
          <p>avatar</p>
        </div>
      </div>

      <div className={classes.trendingContainer}>
        <div className={classes.trending}>
          {data?.data?.map((res: any, index: number) => (
            <HomeTrending coins={res} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeFeed;
