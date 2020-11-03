//import axios dan type action
import Axios from 'axios'
import { LOGIN } from './helper'

// action get product, action adalah function
export const getProduct = () => {
    return async (dispatch) => {
        try {
            // request ambil data ke api
            //dispatch adalah function yang isinya object
            const res = await Axios.get(URL + KEY)
            dispatch({type : LOGIN, payload : res.data})
        } catch (err) {
            console.log(err)
        }
    }
}