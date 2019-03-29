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