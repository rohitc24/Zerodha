import React, {useState}from "react";
import {Link} from "react-router-dom"

const Menu = () => {
    const [selectmenu,setselectmenu]=useState(0);
    const [profiledropdown,setprofiledropdown]=useState(false)
    const menuclas='menu'
    const activeclas="menu selected"

    const setmenu=(index)=>{
        setselectmenu(index)
    }
    const handleprofile=()=>{
        setprofiledropdown((prevval)=>!prevval)
    }
      

  return (
    <div className="menu-container">
      <img src="/images/kite-logo.svg" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link to="/" onClick={()=>setmenu(0)}  style={{textDecoration:"none"}}>
            <p className={selectmenu==0 ? activeclas : menuclas}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link to="/orders" onClick={()=>setmenu(1)} style={{textDecoration:"none"}} >
            <p className={selectmenu==1 ? activeclas : menuclas}>Orders</p>
            </Link>
          </li>
          <li>
          <Link to="/holdings" onClick={()=>setmenu(2)} style={{textDecoration:"none"}}>
            <p className={selectmenu==2 ? activeclas : menuclas}>Holdings</p>
            </Link>
          </li>
          <li>
          <Link to="/positions" onClick={()=>setmenu(3)} style={{textDecoration:"none"}}>
            <p className={selectmenu==3 ? activeclas : menuclas}>Positions</p>
            </Link>
          </li>
          <li>
          <Link to="/funds" onClick={()=>setmenu(4)} style={{textDecoration:"none"}}>
            <p className={selectmenu==4 ? activeclas : menuclas}>Funds</p>
            </Link>
          </li>
          <li>
          <Link to="/apps" onClick={ ()=>setmenu(5)} style={{textDecoration:"none"}}>
            <p className={selectmenu==5 ? activeclas : menuclas}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;