/**
 * Created by jocelio on 15/02/18.
 */
import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import FirstScreen from './containers/FirstScreen'
import SecondScreen from './containers/SecondScreen'
import Home from './containers/Home'
import AppLogin from './containers/AppLogin'


export default DrawerNavigator(
    {
        AppLogin:{
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
        initialRouteName:'AppLogin',
        drawerPosition:'left',
        drawerWidth: 300,
        contentOptions:{
            activeTintColor:'red'
        }
    }
);

