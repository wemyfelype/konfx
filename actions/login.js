/**
 * Created by jocelio on 05/03/18.
 */
import axios from 'axios';
export const DO_LOGIN = 'DO_LOGIN';



export const login = ({username, password}) => {

    const client = {grant_type:"password",
                client_id:"EGxgfhCfV96GY69apjFBLLqj5bhR3i5K",
                client_secret:"i0RO0SHfUC8x73xaGquB_H-2L97arzLcOPVaY-H_q3WtXKHM7fHl3nWSHZUTAH-X",
                audience:"http://localhost:8080"}

    return {
        type: DO_LOGIN,
        payload: axios.post('https://jocelio.auth0.com/oauth/token', {...client, username, password})
    }
 }

 export const userInfo = ( token ) => (
        {type: DO_LOGIN,
        payload: axios.get('https://jocelio.auth0.com/userinfo', {
             headers: {
               Authorization: 'Bearer ' + token
             }
        })})
