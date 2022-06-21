import React from "react";
import classes from "../styles/HomeTrending.module.scss";
import Image from "next/image";

function HomeTrending({ coins }: any) {
  return (
    <div>
      <div className={classes.trendingCoin}>
        <p>price: {coins?.current_price}$</p>
        <p>{coins?.name}</p>
        <p>{coins?.symbol}</p>
        <p> {coins?.price_change_percentage_24h.toFixed(2)}%</p>
        {/* <p>market_cap: {coins?.market_cap}</p> */}
        <img src={coins?.image} alt="coin" />
      </div>
    </div>
  );
}

export default HomeTrending;
