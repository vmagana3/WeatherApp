import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import moment from "moment";
import DetailsModal from "./DetailsModal";
import '../scss/NextTimeContainer.scss';



const NextTimeContainer = ()=>{
   const [state, setState] = useState({
      showModal:false,
      selecteddDay:{},
   });

   const mainContext =  useContext(MainContext);
   const {daily} = mainContext.weather;
   const replace = `at ${moment().format('h:mm a').toUpperCase()}`;

   const handleModal = (day,weekDay)=>{
      setState({
         ...state,
         showModal:true,
         selecteddDay: {
            weather:day,
            weekDay:weekDay,
         },
      })
   }

    return(
       <div className="NexTimeContainer">   
         <div className="next">
            {daily ? daily.map((day, index)=>(
               index === 0 || index === 7 ? null : 
                  <div className="nextTimeItem" key={index} onClick={()=>handleModal(day, moment().add(index, 'days').calendar())}>  
                     <p className="m-0">{moment().add(index, 'days').calendar().replace(replace,"")}</p>                     
                     <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
                     <p className="m-0 minManTitle">Min-Max</p>
                     <p className="minMax badge badge-pill badge-dark">{day.temp.min}° <span>/ {day.temp.max}°</span></p>                                           
                  </div>
            )): (<p>There are not ifo about next weather available :V</p>)}
         </div>  
         {state.showModal ? (
                     <DetailsModal
                        current = {state.selecteddDay}
                        close = {()=>{
                           setState({
                              ...state,
                              showModal:false,                                                            
                           })
                     }}
                     />
                     ): null}                                       
       </div>
    );
}

export default NextTimeContainer;
