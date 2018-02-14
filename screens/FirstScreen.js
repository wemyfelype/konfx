/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class FirstScreen extends React.Component {
    static navigationOptions = {
        tapBarLabel: 'First screen',
        // drawerIcon: ({tinColor}) => {return(
        //     <MaterialIcons
        //         name="change-history"
        //         size={24}
        //         style={{color:tinColor}}>
        //
        //     </MaterialIcons>
        // );}
    };
    render() {
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30, color:'red'}}>
                    First Screen
                </Text>
                <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title={'Open DrawNavigator'}>

                </Button>
            </View>

        );
    }
}

