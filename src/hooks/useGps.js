export default function useGps(){

    const getLocation =  ()=>{        
        if('geolocation' in navigator){
            const gps = navigator.geolocation;
            if(gps){
                return gps;
            }
        }else{
            alert("Geolocation Tool is not available on your browser!!");
        }
    }

    return{
        getLocation,
    }
};
