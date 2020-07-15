import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'

const Services = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageHolder}>
                <ImageBackground imageStyle={{borderTopLeftRadius:10,borderTopRightRadius:10}} style={{flex:1}} resizeMode="center" source={require('../assets/images/dog-walking.jpg')} />
            </View>
            <View style={{padding:10}}>
                <Text>He's having a ball of a time</Text>
            </View>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({
    container:{
        width:"100%",
        borderRadius:10,
        borderColor:'lightgrey',
        borderWidth:1,
        height:300
    },
    imageHolder:{
        height:"80%",
        width:"100%",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    }
})
