import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";
import NewsFeed from "../components/NewsFeed";
import Sidebar from "../components/sidebar/Sidebar";
import classes from "../styles/News.module.scss";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import { getCryptoNews } from "../api/coinApi";

function News() {
  const [age, setAge] = React.useState("cryptocurrency");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const { data } = useQuery(["news", age], () => getCryptoNews(age));

  return (
    <div className={classes.news}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.mainContainer}>
        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"cryptocurrency"}>cryptocurrency</MenuItem>
              <MenuItem value={"Ethereum"}>Ethereum</MenuItem>
              <MenuItem value={"NFT"}>NFT</MenuItem>
              <MenuItem value={"Elon Musk"}>Elon Musk</MenuItem>
              <MenuItem value={"crypto"}>Crypto</MenuItem>
              <MenuItem value={"bitcoin"}>Bitcoin</MenuItem>
              <MenuItem value={"blockchain"}>Blockchain</MenuItem>
              <MenuItem value={"xRP"}>XRP</MenuItem>
              <MenuItem value={"polygon"}>Polygon</MenuItem>
              <MenuItem value={"tether"}>Tether</MenuItem>
              <MenuItem value={"dogecoin"}>Dogecoin</MenuItem>
              <MenuItem value={"tether"}>Tether</MenuItem>
              <MenuItem value={"BNP"}>BNP</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <NewsFeed news={data} />
      </div>
    </div>
  );
}

export default News;
