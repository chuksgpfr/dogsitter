import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Category = ({title, icon}) => {
    return (
        <View style={styles.container}>
            <Image source={icon} />
            <Text>{title.toUpperCase()}</Text>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container:{
        padding:20,
        borderRadius:10,
        borderColor:'lightgrey',
        borderWidth:1,
        width:"45%",
        marginBottom:20
    }
})
