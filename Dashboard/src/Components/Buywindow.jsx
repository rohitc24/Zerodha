import React, { useContext, useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import './Buywindow.css'
import generalcontext from './Genrealcontext';
import axios from "axios";
function Buywindow() {
    let [stock,setstock]=useState({})
    let [stockprice,setstockprice]=useState()
    let [stockqty,setstockqty]=useState(1)
    let {windowclose,stockuid}=useContext(generalcontext)
    // console.log(stock)
    // console.log(stockuid)
    useEffect(()=>{
        (async()=>{
            let stock1=await axios.get(`http://localhost:5000/getstock/${stockuid}`)
            setstock(stock1.data)
            setstockprice(stock1.data.price)
            // console.log(stock1.data)
        })()
    },[stockuid])
    const handlebuy=()=>{
        (async()=>{
            let order=await axios.post("http://localhost:5000/neworder",{
                name:stockuid,
                price:stockprice,
                qty:stockqty,
                mode:"buy"
            })
        })()
        windowclose()
    }
    const handelcancel=()=>{
        windowclose()
    }

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setstockqty(e.target.value)}
                            value={stockqty}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>price</legend>
                        <input
                            type="number"
                            name="price"
                            id="margin"
                            step="0.05"
                            onChange={(e) => setstockprice(e.target.value)}
                            value={stockprice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin:{stockqty*stock.price}</span>
                <div>
                    <Link className="btn btn-blue" onClick={handlebuy}>
                        Buy
                    </Link>
                    <Link to="" className="btn btn-grey" onClick={handelcancel} >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Buywindow;