import React,{useState,useEffect}from "react";
import axios from "axios";

const Positions = () => {
  const [positions,setpositions]=useState([])
   useEffect(()=>{
      
      axios.get("http://localhost:5000/position").then((res)=>{
        // console.log(res.data)
        setpositions(res.data)
      })
     
   },[])
  return (
    <>
      <h3 className="title">Positions (2)</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

           {positions.map((stock, index) => {
                      const currval = stock.price * stock.qty
                      const isprofit = currval - stock.avg * stock.qty >= 0
                      const profclass = isprofit ? "profit" : "loss"
                      const pnl = currval - stock.avg * stock.qty
                      const dayloss=stock.isLoss ? "loss":"profit"
                      return (
          
                        <tr key={index}>
                          <td>{stock.product}</td>
                          <td>{stock.name}</td>
                          <td>{stock.qty}</td>
                          <td>{stock.avg}</td>
                          <td>{stock.price}</td>
                          <td className={profclass}>{pnl.toFixed(2)}</td>
                          
                          <td className={dayloss}>{stock.day}</td>
                        </tr>
          
                      )
                    })}

        </table>
      </div>
    </>
  );
};

export default Positions;