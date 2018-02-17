/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import MenuSettings from "./MenuSettings";

export default class FirstScreen extends Component {

    static navigationOptions = MenuSettings({login:'First screen',iconName:'change-history'});

    render() {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30, color:'red'}}>
                    First Screen ;)
                </Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title={'Open DrawNavigator'}/>

            </View>

        );
    }
}

