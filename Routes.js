/**
 * Created by jocelio on 15/02/18.
 */
import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import FirstScreen from './containers/screens/FirstScreen'
import SecondScreen from './containers/screens/SecondScreen'
import Home from './containers/screens/Home'
import AppLogin from './containers/screens/AppLogin'
import CustomDrawerContent from './containers/common/CustomDrawerContent'


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
        contentComponent: CustomDrawerContent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle'
    }
);




