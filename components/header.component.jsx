import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'

const Header = ({title}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>{title}</Text>
            <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require('../assets/icons/menu.png')} />
            </TouchableOpacity>
            
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    bigText:{
        fontSize:25,
        fontWeight:"bold"
    }
})
