import { useContext } from 'react';
import DateTimeContainer from '../components/DateTimeContainer';
import CurrentTime from './CurrentTime';
import { MainContext } from '../context/MainContext';
import '../scss/MainContainer.scss';


export default function MainContainer(){
    const mainContext = useContext(MainContext);

    return(
        <div className='MainContainer'>
            <DateTimeContainer></DateTimeContainer>            
            <CurrentTime></CurrentTime>              
        </div>
    );
}
