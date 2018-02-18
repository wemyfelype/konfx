/**
 * Created by jocelio on 14/02/18.
 */
import React, { Component } from 'react';
import { Text } from "react-native";
import { Button, Container, Content} from 'native-base'
import MenuSettings from './commom/MenuSettings'
import CustomHeader from '../components/CustomHeader'


export default class AppLogin extends Component {

    static navigationOptions = MenuSettings({label:'Login',iconName:'account-box'});

    render() {
        return (
            <Container>

                <CustomHeader title={AppLogin.navigationOptions.tapBarLabel} drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

                <Text>App Login {this.navigationOptions}</Text>
                    <Button onPress={() => this.props.navigation.navigate('Home')} full>
                        <Text style={{ color: 'white' }}>Go To Home Screen</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

