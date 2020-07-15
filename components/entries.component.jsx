import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Avatar } from 'react-native-paper'

const Entries = ({walker}) => {
    let {name, picture} = walker; 
    return (
        <View style={styles.container}>
            <View style={styles.holder}>
                <Avatar.Image size={54} source={{uri:picture.medium}} />
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:20}}>{name.first} {name.last}</Text>
                    <View style={{flexDirection:"row", marginTop:5}}>
                        <Avatar.Image size={20} style={{backgroundColor:"#FFF"}} source={require('../assets/icons/star.png')} />
                        <Text style={{marginLeft:10}}>4.8</Text>
                    </View>
                </View>
                <View style={{alignSelf:"flex-end", justifyContent:"space-between"}}>
                    <Avatar.Image size={30} style={{backgroundColor:"#fff", marginBottom:5}} source={require('../assets/icons/phone.png')} />
                    <Avatar.Image size={30} style={{backgroundColor:"#fff"}} source={require('../assets/icons/bookmark.png')} />
                </View>
            </View>
            
            
        </View>
    )
}

export default Entries

const styles = StyleSheet.create({
    container:{
        width:"100%",
        borderRadius:10,
        borderColor:'lightgrey',
        borderWidth:1,
        height:100,
        marginTop:30,
        backgroundColor:"#fff"
    },
    holder:{
        flexDirection:"row",
        padding:20,
        justifyContent:"space-between",
        //flex:1
    }
})
