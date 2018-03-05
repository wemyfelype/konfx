/**
 * Created by jocelio on 05/03/18.
 */
import axios from 'axios';
 export const DO_LOGIN = 'DO_LOGIN';


 export const login = ({username, password}) => {
     return {
       type DO_LOGIN,
       payload: axios.post('http://localhost:3000/login', {username, password})
     }
 }
