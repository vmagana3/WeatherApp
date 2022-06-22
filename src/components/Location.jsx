import { useContext } from "react";
//Context
import { MainContext } from "../context/MainContext";

export default function Location(){
    const mainContext = useContext(MainContext);    
    const {city} = mainContext;
    return(
        <h1 className="text-light display-3"><span className="display-4">{city.name}</span>, {city.cityState}</h1>
    )
}