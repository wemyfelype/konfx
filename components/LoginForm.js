/**
 * Created by jocelio on 17/02/18.
 */
import React, {Component} from 'react'
import {StyleSheet, View, TextInput, Text, Alert} from 'react-native'
import { Button } from 'native-base'
import { onSignIn } from "../auth/auth";
import { login } from "../actions/login";
import { connect } from "react-redux";

class LoginForm extends Component {

    constructor(props){
        super(props)
        this.state = {user:''}
    }

    render() {
       return <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Usuário ou E-mail'
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(user) => this.setState({user})}

                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    returnKeyType='go'
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                />
            </View>
            <View style={{backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
                <Button title={'Login'}
                        onPress={() => this.doLogin()} full>
                    <Text style={styles.button}>Entrar </Text>
                </Button>
            </View>
        </View>
    }

    doLogin(){
        this.props.login({
            "username": this.state.user || 'jclls@hotmail.com',
            "password": this.state.password || 'Z'
        }).then( r => {
            console.log(r.payload.data)
            if (r.payload.data.access_token) {
                this.props.navigation.navigate("SignedIn")
            }
        })
        //     .then(r =>
        // ).catch( e => console.log(e))
        // onSignIn()
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data
    }
}


export default connect(mapStateToProps, { login })(LoginForm)


const styles = StyleSheet.create({
    button:{
        color:'#FFF'
        , alignItems: 'center'
        , justifyContent: 'center'
        , paddingHorizontal:10

    },
    input:{
          height:50
        , backgroundColor:'rgba(255,255,255,0.3)'
        , marginBottom: 20
        , color:'#FFF'
        , paddingHorizontal:10
        , fontSize: 20

    }
})
