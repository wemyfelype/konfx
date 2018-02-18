/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import { Image, View, StyleSheet, Text } from "react-native";
import { Container, Content} from 'native-base'
import MenuSettings from '../common/MenuSettings'
import Images from '../../assets/images'
import LoginForm from '../../components/LoginForm'


export default class AppLogin extends Component {

    static navigationOptions = MenuSettings({label:'Login',iconName:'account-box'});
    //     static navigationOptions = {
    //         drawerLabel: () => null
    //     }

    render() {
        return (
            <Container>

                <Content contentContainerStyle={styles.content}>

                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={Images.loginLogo}
                        />
                        <Text style={styles.text}>An app made using React Native :)</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm navigation={this.props.navigation}/>
                    </View>

                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content:{
          flex: 1
        , flexGrow:1
        , alignItems: 'center'
        , justifyContent: 'center'
        , padding: 10
        , backgroundColor:'#3498db'
    },
    logo:{
        width:110
        , height:110
    },
    text:{
        color:'#fff'
        , marginTop:10
        , fontSize:22
    },
    logoContainer:{
         alignItems: 'center'
        , justifyContent: 'center'
    },
    formContainer:{
        width: '100%'
    }
});