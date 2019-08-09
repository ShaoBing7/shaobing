import {createStore} from 'redux';
import reduce from "./reduce"

const initialState = {
    count:10
}

let store = createStore(reduce,initialState)

export default store