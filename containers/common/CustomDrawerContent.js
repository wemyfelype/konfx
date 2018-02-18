import React from 'react';
import { DrawerItems } from 'react-navigation';
import {Text, Image, StyleSheet} from "react-native";
import { Container, Content, Header, Body } from 'native-base'
import Images from "../../assets/images";

const customDrawerContent = (props) => (
    <Container>
        <Header style={styles.drawerHeader}>
            <Body>
            <Image
                style={styles.drawerImage}
                source={Images.profile} />
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Jocélio Lima</Text>
            <Text style={{fontSize: 20}}>jocelio27@gmail.com</Text>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerHeader: {
        height: 200,
        backgroundColor: '#7f8c8d'
    },
    drawerImage: {
        height: 100,
        width: 100,
        borderRadius: 75
    }
})

export default customDrawerContent;