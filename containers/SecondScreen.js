/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class SecondScreen extends React.Component {
    static navigationOptions = {
        tapBarLabel: 'Second Screen',
        drawerIcon: ({tinColor}) => {return(
            <MaterialIcons
            name="card-membership"
            size={24}
            style={{color:tinColor}}/>
        );}
    };
    render() {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30, color:'green'}}>
                    Second Screen
                </Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'Open DrawNavigator'}>

                </Button>
            </View>

        );
    }
}

