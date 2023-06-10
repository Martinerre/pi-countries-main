import axios from 'axios';
import { GET_COUNTRIES, FIND_BY_ID, FIND_BY_NAME, GET_ACTIVITIES, POST_ACTIVITIES } from './types'

export function getCountries() {
    return async function (dispatch) {
        const todas = await axios.get(`http://localhost:3001/countries`);
        //const allCoutries = todas. //revisar
        dispatch({ type: GET_COUNTRIES, payload: todas })
    }
};

export function findById(id) {
    return {
        type: FIND_BY_ID,
        payload: id
    }
};

export function findByName(name) {
    return {
        type: FIND_BY_NAME,
        payload: name
    }
};

export function postActivities(newact) {
    return {
        type: POST_ACTIVITIES,
        payload: newact
    }
};

export function getActivities() {
    return {
        type: GET_ACTIVITIES,
    }
}

//type pasamos a la actions, 