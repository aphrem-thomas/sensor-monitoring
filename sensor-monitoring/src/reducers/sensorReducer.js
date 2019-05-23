export function sensorReducer(state=[], action){
    switch(action.type){
        case 'ADD_DATA':{
            return [...state,action.payload];
        }
        default: return state;
    }
}


export function temperatureReducer(state=[], action){
    switch(action.type){
        case 'ADD_TEMP':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function aqiReducer(state=[], action){
    switch(action.type){
        case 'ADD_AQI':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function aqhiReducer(state=[], action){
    switch(action.type){
        case 'ADD_AQHI':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function ozoneReducer(state=[], action){
    switch(action.type){
        case 'ADD_OZONE':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function pm10Reducer(state=[], action){
    switch(action.type){
        case 'ADD_PM10':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function pm2_5Reducer(state=[], action){
    switch(action.type){
        case 'ADD_PM2':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function no2Reducer(state=[], action){
    switch(action.type){
        case 'ADD_NO2':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function coReducer(state=[], action){
    switch(action.type){
        case 'ADD_CO':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function humidityReducer(state=[], action){
    switch(action.type){
        case 'ADD_HUMID':{
            return [...state,action.payload];
        }
        default: return state;
    }
}

export function aqi_pm25(state=null, action){
    switch(action.type){
        case 'ADD_AQI_PM25':{
            return action.payload.aqi_pm25;
        }
        default: return state;
    }
}

export function aqhi_pm25(state=null, action){
    switch(action.type){
        case 'ADD_AQHI_PM25':{
            return action.payload.aqhi_pm25;
        }
        default: return state;
    }
}

export function aqi_ozone(state=null, action){
    switch(action.type){
        case 'ADD_AQI_OZONE':{
            return action.payload.aqi_ozone;
        }
        default: return state;
    }
}

export function aqhi_ozone(state=null, action){
    switch(action.type){
        case 'ADD_AQHI_OZONE':{
            return action.payload.aqhi_ozone;
        }
        default: return state;
    }
}

export function aqi_no2(state=null, action){
    switch(action.type){
        case 'ADD_AQI_NO2':{
            return action.payload.aqi_no2;
        }
        default: return state;
    }
}

export function aqhi_no2(state=null, action){
    switch(action.type){
        case 'ADD_AQHI_NO2':{
            return action.payload.aqhi_no2;
        }
        default: return state;
    }
}