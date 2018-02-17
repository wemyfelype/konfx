/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import MenuSettings from "./MenuSettings";

export default class SecondScreen extends Component {

    static navigationOptions = MenuSettings({login:'Second Screen',iconName:'card-membership'});

    render() {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30, color:'green'}}>
                    Second Screen
                </Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title={'Open DrawNavigator'}/>
            </View>

        );
    }
}

