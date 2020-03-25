export const BUY_ITEM = 'BUY_ITEM'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const buyItem = item => {
    console.log("BUYING!",item)
    return {
        type: BUY_ITEM,
        payload: item
    }
}

export const removeFeature = feature => {
    console.log("REMOVING!",feature)
    return {
    type: REMOVE_FEATURE,
    payload: feature,
    }
}