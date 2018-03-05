/**
 * Created by jocelio on 18/02/18.
 */
import { AsyncStorage } from "react-native";
import { login } from "./../actions/login";

export const USER_KEY = "auth-key";

export const onSignIn = ({username, password}) => {
  login({username, password}).then(r => {
    console.log(r)
    AsyncStorage.setItem(USER_KEY, loginData);
  }).catch(e => {
    console.log(e)
  });
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};
