export const ADD_CAR = 'ADD_CAR'
export const REMOVE_CAR = 'REMOVE_CAR'

export const addCar = car => {
    return {
        type: ADD_CAR,
        payload: {
            value: car,
            completed: false,
        }
    }
}

export const removeCar = car => {
    return {
    type: REMOVE_CAR,
    payload: car,
    }
}