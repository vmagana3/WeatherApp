export default function useWeather(){
    const getWeather = async (lat, long)=>{
        let apiKey = '25c7742588642bad2f722d4d2aa1221a';
        let excludeValues = 'minutely,hourly,alerts';
        let endpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${excludeValues}&cnt=5&units=metric&appid=${apiKey}`;
        
        const response =  await fetch(endpoint);    
        const weather = await response.json();
        return weather
    }

    return{
        getWeather,
    }
}