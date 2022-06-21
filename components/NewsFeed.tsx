/* eslint-disable @next/next/no-img-element */
import React from "react";
import classes from "../styles/NewsFeed.module.scss";
import NewsItem from "./NewsItem";

function NewsFeed({ news }: any) {
  console.log("🚀 ~ file: NewsFeed.tsx ~ line 4 ~ NewsFeed ~ news", news);
  return (
    <div>
      <div>
        <h1>header</h1>
      </div>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          {news?.data?.value?.map((res: any, index: number) => (
            <div className={classes.box} key={index}>
              <NewsItem news={res} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
