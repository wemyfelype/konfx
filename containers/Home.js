/**
 * Created by jocelio on 14/02/18.
 */

import React, {Component} from "react";
import {Text} from "react-native";
import {Button, Container, Content} from 'native-base'
import MenuSettings from "./commom/MenuSettings";
import CustomHeader from '../components/CustomHeader'

export default class Home extends Component {

    static navigationOptions = MenuSettings({label:'Home',iconName:'home'});

    render() {
        return (
            <Container>

                <CustomHeader title={Home.navigationOptions.tapBarLabel} drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

                    <Text>Home Screen</Text>

                    <Button onPress={() => this.props.navigation.navigate('Login')} full>
                        <Text style={{ color: 'white' }}>Go To Login Screen</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

