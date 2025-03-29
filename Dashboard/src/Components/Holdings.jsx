import React, { useEffect, useState } from "react";
import axios from "axios"
import {Verticalbar} from "./Verticalbar"
import { Doughnutchart } from "./Doughnutchart";

const Holdings = () => {
 const [holdings,setholdings]=useState([])
 useEffect(()=>{
    
    axios.get("http://localhost:5000/holding").then((res)=>{
      // console.log(res.data)
      setholdings(res.data)
    })
   
 },[])

//  const labels = holdings.map((stock)=>stock.name);

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Price',
//       data: holdings.map((stock) =>stock.price*stock.qty ),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     }
//   ],
// };


const data = {
  labels: holdings.map((stock)=>stock.name),
  datasets: [
    {
      label: 'Holdings',
      data: holdings.map((stock) =>stock.price*stock.qty ),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



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

      <div className="row">
        <div className="col-3">

        </div>
        <div className="col-7">
        <Doughnutchart data={data}/>
        </div>
        <div className="col-2">
          
        </div>
      </div>
    </>
  );
};

export default Holdings;