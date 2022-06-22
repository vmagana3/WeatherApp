import { useState } from "react";
import moment from "moment";

export default function(){

    const [date,setDate] = useState(moment().format('LL'));

    return(
        <h2 className="text-light">{date}</h2>
    )
}