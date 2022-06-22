export default function useLocation(){

    let parameters = {
        endpoint: 'http://api.openweathermap.org/geo/1.0/reverse',
        apiKey:'25c7742588642bad2f722d4d2aa1221a',
        limit: 1,
    }

    const getCurrentCity = async (lat,long)=>{
        const response = await fetch(`${parameters.endpoint}?lat=${lat}&lon=${long}&limit=${parameters.limit}&appid=${parameters.apiKey}`)
        const location = await response.json();
        return location;
    }
    
    return {
        getCurrentCity,
    }
}
