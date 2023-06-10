import { GET_COUNTRIES, FIND_BY_ID, FIND_BY_NAME, GET_ACTIVITIES, POST_ACTIVITIES } from './types'

const initialState = {
    country: [],
    countryDetail: {},
    activity: []
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state, country: payload
            }
        case FIND_BY_ID:
            return {

            }
        case FIND_BY_NAME:
            return {

            }
        case POST_ACTIVITIES:
            return {

            }
        case GET_ACTIVITIES:
            return {

            }
    }
};

export default rootReducer