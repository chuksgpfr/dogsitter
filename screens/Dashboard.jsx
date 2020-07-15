import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Header from '../components/header.component'
import Category from '../components/category.component'
import Services from '../components/services.component'

const Dashboard = () => {
    return (
        <SafeAreaView>
            <Header title="What's New" />
            <ScrollView contentInset={{bottom:50}}>
                <View style={styles.container}>
                    <Category title="boarding" icon={require('../assets/icons/boarding.png')} />
                    <Category title="House Sitting" icon={require('../assets/icons/house.png')} />
                </View>
                <View style={styles.container}>
                    <Category title="walking" icon={require('../assets/icons/walking.png')} />
                    <Category title="day care" icon={require('../assets/icons/daycare.png')} />
                </View>
                <View style={styles.container}>
                    <Category title="training" icon={require('../assets/icons/training.png')} />
                    <Category title="volunteer" icon={require('../assets/icons/volunteer.png')} />
                </View>
                <View style={styles.serviceBox}>
                    <View>
                        <Text style={styles.bigText}>My Services</Text>
                    </View>
                    <View>
                        <Services />
                    </View>
                    <View>
                        <Services />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    serviceBox: {
        padding: 10
    },
    bigText: {
        fontSize: 18,
        fontWeight:"bold",
        marginBottom:10
    }
})
