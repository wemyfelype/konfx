/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   DrawerLayoutAndroid,
// } from 'react-native';
//
// type Props = {};
//
// export default class App extends Component<Props> {
//   render() {
//
//
//       var navigationView = (
//           <View style={{flex: 1, backgroundColor: '#fff'}}>
//             <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>AwesomeApp!</Text>
//
//             <View style={{flex: 1, backgroundColor: '#ccc'}}>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
//                   User Profile
//               </Text>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Configurations</Text>
//             </View>
//           </View>
//       );
//
//       return (
//           <DrawerLayoutAndroid
//               drawerWidth={200}
//               drawerPosition={DrawerLayoutAndroid.positions.Left}
//               renderNavigationView={() => navigationView}>
//             <View style={{flex: 1, alignItems: 'center'}}>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Wemy</Text>
//               <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//             </View>
//           </DrawerLayoutAndroid>
//       );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import FirstScreen from './screens/FirstScreen'
import SecondScreen from './screens/SecondScreen'


const DrawerExample = DrawerNavigator(
        {
            First:{
                path:'/',
                screen:FirstScreen,
            },
            Second:{
                path:'/sent',
                screen:SecondScreen,
            }
        },
        {
            initialRouteName:'First',
            drawerPosition:'left '
        }
);

export default DrawerExample;