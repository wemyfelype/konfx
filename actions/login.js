/**
 * Created by jocelio on 05/03/18.
 */
import axios from 'axios';
export const DO_LOGIN = 'DO_LOGIN';


export const login = ({username, password}) => {

const client = {"grant_type","password",
                "client_id","jBVr-XPVKV2IOunU1TdA7c8CDGLq",
                "client_secret","iJnudK3jnoekti_VXN5UZaMBqZ-KH1HmTE501HsFBsl24dvvYlxq0FiwLwdb",
                "audience",""}

     return {
       type DO_LOGIN,
       payload: axios.post('https://jocelio.auth0.com/oauth/token', {...client, username, password})
     }
 }


 export const userInfo = ( token ) => (
        {type DO_LOGIN,
        payload: axios.get('https://jocelio.auth0.com/userinfo', {
             headers: {
               Authorization: 'Bearer ' + token
             }
        })})
