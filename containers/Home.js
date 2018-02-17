/**
 * Created by jocelio on 14/02/18.
 */

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import MenuSettings from "./MenuSettings";
import CustomHeader from '../components/CustomHeader'


export default class Home extends Component {

    static navigationOptions = MenuSettings({login:'Home',iconName:'home'});

    render() {
        return (
            <Container>

                <CustomHeader title="Home" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

                <Content
                    contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        onPress={() => this.props.navigation.navigate('Settings')} full>
                        <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
                    </Button>
                </Content>

            </Container>

        );
    }
}

