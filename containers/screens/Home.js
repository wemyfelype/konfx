/**
 * Created by jocelio on 14/02/18.
 */
import React, {Component} from "react";
import {Text} from "react-native";
import {Button, Container, Content} from 'native-base'
import MenuSettings from "../common/MenuSettings";
import CustomHeader from '../common/CustomHeader'
import {onSignOut} from "../../auth/auth";

export default class Home extends Component {

    static navigationOptions = MenuSettings({label:'Home',iconName:'home'});

    render() {
        return (
            <Container>

                <CustomHeader title={Home.navigationOptions.tapBarLabel} drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>

                    <Text>Home Screen</Text>

                    <Button onPress={() => onSignOut().then(() => this.props.navigation.navigate("SignedOut"))}
                    full>
                        <Text style={{ color: 'white' }}>Logout</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

