/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import React from "react";
import classes from "../styles/NewsItem.module.scss";

function NewsItem({ news }: any) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <img
            src={
              news?.provider?.[0]?.image?.thumbnail?.contentUrl ||
              "https://banner2.cleanpng.com/20180320/ssw/kisspng-united-states-fox-news-cnn-sky-news-png-news-simple-5ab0db420924a3.5024371215215399060375.jpg"
            }
            alt="provider"
          />
          <span>{news?.provider?.[0]?.name}</span>
        </div>
        <p>{moment(news?.datePublished).startOf("h").fromNow()}</p>
      </div>
      <div className={classes.topContainer}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>
            <p>{news?.name}</p>
          </div>
          <div className={classes.imgContainer}>
            <img
              alt="crypto"
              src={
                news?.image?.thumbnail?.contentUrl ||
                "https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y3J5cHRvY3VycmVuY3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              }
            ></img>
          </div>
        </div>
      </div>

      <div className={classes.botContainer}>
        <p>{news?.description}</p>
      </div>
    </div>
  );
}

export default NewsItem;
