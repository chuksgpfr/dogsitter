import React, { useState, useEffect, useRef, Component } from 'react'
import { StyleSheet, View, AsyncStorage } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const DrawerContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: "https://via.placeholder.com/300.png/09f/fff"
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 20, flexDirection: 'column' }}>
                                <Title>Chukwudi Ubah</Title>
                                <Caption>chuksgpfr@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            label="Dashboard"
                            onPress={() => props.navigation.navigate('Dashboard')}
                        />
                        <DrawerItem
                            label="Walkers"
                            onPress={() => props.navigation.navigate('Walkers')}
                        />


                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >
                <DrawerItem
                    label="Logout"
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    drawerSection: {
        marginTop: 15
    }
})
