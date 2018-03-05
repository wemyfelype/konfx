/**
 * Created by jocelio on 17/02/18.
 */
import React from 'react'
import {StyleSheet, View, TextInput, Text} from 'react-native'
import { Button } from 'native-base'
import {onSignIn} from "../auth/auth";

export default ({navigation}) => (
    <View style={styles.container}>
        <View>
            <TextInput
                style={styles.input}
                placeholder='Usuário ou E-mail'
                returnKeyType='next'
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                ref={(input) => this.userInput = input}
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                returnKeyType='go'
                secureTextEntry
                ref={(input) => this.passwordInput = input}
            />
        </View>
        <View style={{backgroundColor:'red', alignItems: 'center', justifyContent: 'center'}}>
            <Button title={'Login'}
                    onPress={() => onSignIn({this.userInput, this.passwordInput}).then(() => navigation.navigate("SignedIn"))} full>
                <Text style={styles.button}>Entrar </Text>
            </Button>
        </View>
    </View>
)


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
