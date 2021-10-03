import React from "react";
import logo from "../components/logo.svg"
import Profilecard from "./Profilecard";

const Content=()=>{
    return(<>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img style={{width:"55%",height:"70vh"}} className="p-5" src={logo} alt="logo"/>
            <img style={{ width: "55%", marginTop: 6 + "rem",height:"50%"}} className="p-5" src={logo} alt="logo"/>
        </div>
    <Profilecard/>
        </>
    )
}
export default Content;