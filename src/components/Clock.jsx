import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { MainContext } from "../context/MainContext";


export default function Clock() {

    const mainContext = useContext(MainContext);

    const [time, setTime] =  useState(moment().format('LTS'));

    const getTime = ()=>{
        setTime(moment().format('LTS'));
    }

    useEffect(()=>{
        setInterval(getTime,1000);
    },[]);

    return(
        <h3 className="text-ligth d-inline">                 
            {time}
        </h3>
    )
}
