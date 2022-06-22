//Components
import Clock from "./Clock";
import Date from "./Date";
import Location from "./Location";

//Styles
import '../scss/DateTimeContainer.scss';

export default function DateTimeContainer(){
    
    return(
        <div className="DateTimeContainer">
            <div>                  
                <Location/>
                <Date></Date>
                <Clock></Clock>  
            </div>
        </div>
    );
}
