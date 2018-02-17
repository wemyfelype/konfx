/**
 * Created by jocelio on 15/02/18.
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from "react-native";
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Icon, Header, Body } from 'native-base'
import FirstScreen from './containers/FirstScreen'
import SecondScreen from './containers/SecondScreen'
import Home from './containers/Home'
import AppLogin from './containers/AppLogin'
import Images from './assets/images'

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={Images.profile} />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

export default DrawerNavigator(
    {
        Login:{
            path:'/',
            screen: AppLogin,
        },
        Home:{
            path:'/home',
            screen: Home,
        },
        First:{
            path:'/first',
            screen: FirstScreen,
        },
        Second:{
            path:'/sent',
            screen: SecondScreen,
        }
    },
    {
        initialRouteName:'Login',
        drawerPosition:'left',
        drawerWidth: 300,
        contentOptions:{
            activeTintColor:'red'
        },
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerHeader: {
        height: 200,
        backgroundColor: '#1abc9c'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }

})

