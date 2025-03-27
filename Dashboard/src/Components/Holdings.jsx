import React, { useEffect, useState } from "react";
import axios from "axios"

const Holdings = () => {
 const [holdings,setholdings]=useState([])
 useEffect(()=>{
    
    axios.get("http://localhost:5000/holding").then((res)=>{
      // console.log(res.data)
      setholdings(res.data)
    })
   
 },[])

  const total=holdings
  .reduce((res,stock)=>(res=res+stock.price*stock.qty),0)
  .toFixed(2)
  const profit=holdings
  .reduce((res,stock)=>(res=res+(stock.price*stock.qty-stock.avg*stock.qty)),0)
  .toFixed(2)
  const prcntg=(holdings
    .reduce((res,stock)=>(res=res+(stock.price*stock.qty-stock.avg*stock.qty)),0)
    /
    holdings
    .reduce((res,stock)=>(res=res+stock.avg*stock.qty),0)).toFixed(5)*100
  // console.log(total)
  return (
    <>
      <h3 className="title">Holdings({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {holdings.map((stock, index) => {
            const currval = stock.price * stock.qty
            const isprofit = currval - stock.avg * stock.qty >= 0
            const profclass = isprofit ? "profit" : "loss"
            const pnl = currval - stock.avg * stock.qty
            const dayloss=stock.isLoss ? "loss":"profit"
            return (

              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price}</td>
                <td>{currval}</td>
                <td className={profclass}>{pnl.toFixed(2)}</td>
                <td>{stock.net}</td>
                <td className={dayloss}>{stock.day}</td>
              </tr>

            )
          })}

        </table>
      </div>



      <div className="row">
        <div className="col">
          <h5>
            {total
          .split(".")[0]}.
          <span>{total
            .split(".")[1]}</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {total
            .split(".")[0]}.<span>{holdings
            .reduce((res,stock)=>(res=res+stock.price*stock.qty),0)
            .toFixed(2)
            .split(".")[1]}</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{profit}
          <span>
          +
          {prcntg}%
            </span></h5>
          <p>P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;