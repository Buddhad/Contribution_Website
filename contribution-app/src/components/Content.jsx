import React from "react";
import logo from "../components/logo.svg"
const Content=()=>{
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img style={{width:"55%",height:"50%"}} className="p-5" src={logo} alt="logo"/>
        </div>
    )
}
export default Content;