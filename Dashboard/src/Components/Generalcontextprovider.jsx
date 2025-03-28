import { useState } from "react";
import generalcontext from "./Genrealcontext";
import Buywindow from "./Buywindow";
const Generalcontextprovider = ({children}) => {
    let [isbuy, setisbuy] = useState(false)
    let [stockuid,setstockuid]=useState('');

    let windowopen=(uid)=>{
        setisbuy(true)
        setstockuid(uid);

    }
    let windowclose=()=>{
        setisbuy(false)
        setstockuid()
    }    
    return (
        <generalcontext.Provider value={{ isbuy,windowopen,windowclose,stockuid }} >
            {children}
            {isbuy && <Buywindow/>}
        </generalcontext.Provider>
    )
}

export default Generalcontextprovider;