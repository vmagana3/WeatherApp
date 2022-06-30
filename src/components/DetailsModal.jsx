import moment from "moment";
import {WiSunrise, WiSunset, WiDaySunny, WiNightClear} from 'react-icons/wi';

export default function DetailsContainer({current, close:_close}){
    const weekDay = current.weekDay;
    const {weather} = current;
    const replace = `at ${moment().format('h:mm a').toUpperCase()}`;

    return(
        <div className="modal d-block" id="exampleModalCenter" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-dark" id="exampleModalLongTitle">{weekDay.replace(replace,"")}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={_close}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>                
                <div className="modal-body text-dark">
                    <div className="d-flex justify-content-around align-items-center">   
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="WeatherIcon"/>                        
                            <div>
                                <h3>{weather.weather[0].main}</h3>
                                <h5>{weather.weather[0].description}</h5>
                            </div>
                        </div>       

                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="m-0 minManTitle">Min-Max</p>
                            <p className="minMax badge badge-pill badge-dark">{weather.temp.min}° <span>/ {weather.temp.max}°</span></p>
                        </div>                        
                    </div>  
                    <div>
                        <h5 className="text-center mt-3 font-weight-bold">Feels Like</h5>
                        <div className="d-flex justify-content-around align-items-center mt-3">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WiSunrise size={30}/>
                                <small>Morning</small>
                                <span>{weather.temp.morn} °C</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <WiDaySunny size={30}/>
                                <small>Day</small>
                                <span>{weather.temp.day} °C</span>
                            </div>
                            <div  className="d-flex flex-column justify-content-center align-items-center">
                                <WiSunset size={30}/>
                                <small>Evening</small>
                                <span>{weather.temp.eve} °C</span>
                            </div>
                            <div  className="d-flex flex-column justify-content-center align-items-center">
                                <WiNightClear size={30}/>
                                <small>Night</small>
                                <span>{weather.temp.night} °C</span>
                            </div>
                        </div>
                    </div>                  
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={_close}>Close</button>                    
                    </div>
                </div>
            </div>
    </div>
    )
}
