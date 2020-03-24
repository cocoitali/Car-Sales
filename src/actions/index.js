export const ADD_CAR = 'ADD_CAR'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addCar = car => {
    return {
        type: ADD_CAR,
        payload: {
            value: car,
            completed: false,
        }
    }
}

export const removeFeature = feature => {
    return {
    type: REMOVE_FEATURE,
    payload: feature,
    }
}