import { useState } from "react";
import generalcontext from "./Genrealcontext";
const Generalcontextprovider = (children) => {
    let [isbuy, setisbuy] = useState(false)

    return (
        <generalcontext.Provider value={{ isbuy, setisbuy }} >
            {children}
        </generalcontext.Provider>
    )
}

export default Generalcontextprovider;