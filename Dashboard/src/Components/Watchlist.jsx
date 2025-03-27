import React, { useContext, useState } from "react";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import {Tooltip,Grow} from "@mui/material"
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import generalcontext from "./Genrealcontext"

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return <Watchlistitem stock={stock} key={index}/>
        })}
      </ul>
    </div>
  );
};

export default WatchList;

const Watchlistitem=({stock})=>{
  const [selecteditem,Setselecteditem]=useState(false)
 return(
  <li onMouseEnter={()=>Setselecteditem(true)} onMouseLeave={()=>Setselecteditem(false)}>
    <div className="item">
    <p className={stock.isDown ? "down":"up"}>
      {stock.name}
    </p>
      <div className="item-info">
        <span className="percent">
          {stock.percent}
        </span>
        {stock.isDown ? <KeyboardArrowDownIcon className="down"/> : <KeyboardControlKeyIcon className="up"/>}
        <span className="price">
          {stock.price}
        </span>
      </div>
    </div>
    {selecteditem && <WatchListactions uid={stock.name}/>}

  </li>
 )
}

const WatchListactions=({uid})=>{
  const {isbuy}=useContext(generalcontext)
  console.log(isbuy);
  
  return (
    <div className="actions">
    <span>
      <Tooltip
      title="Buy(B)"
      placement="top"
      arrowTransitionComponent={Grow}
      >
        <button className="buy">
          Buy
        </button>
      </Tooltip>
      <Tooltip
      title="sell(S)"
      placement="top"
      arrowTransitionComponent={Grow}
      >
        <button className="sell">
          Sell
        </button>
      </Tooltip>
      <Tooltip
      title="Chart(C)"
      placement="top"
      arrowTransitionComponent={Grow}
      >
        <button className="action">
          <BarChartIcon className="icon"/>
        </button>
      </Tooltip>
      <Tooltip
      title="More(M)"
      placement="top"
      arrowTransitionComponent={Grow}
      >
        <button className="action">
          <MoreHorizIcon className="icon"/>
        </button>
      </Tooltip>
    </span>
    </div>
  )
}