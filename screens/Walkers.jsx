import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import Header from '../components/header.component'
import Category from '../components/category.component'
import Entries from '../components/entries.component'
import { Searchbar } from 'react-native-paper'
import axios from 'axios';

const Walkers = () => {
    const [walkers, setWalkers] = useState([])
    //const [filterTerm, setFilterTerm] = useState("")
    const [filteredWalkers, setFilteredWalkers] = useState([])

    useEffect(() => {
        let mounted = true;

        if(mounted){
            getUsers()
        }
        
        return () => {
            mounted = false;
        }
    }, [])


    const getUsers = async() => {
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let result = await axios.get('https://randomuser.me/api/?results=50',requestOptions);
        setWalkers(result.data.results)
        setFilteredWalkers(result.data.results)
    }

    const filterWalkers=(filterTerm)=>{
        const filtered = walkers.filter(walker=>walker.name.first.includes(filterTerm) || walker.name.last.includes(filterTerm));
        setFilteredWalkers(filtered);
        //console.log(filterTerm)
    }

    return (
        <SafeAreaView>
            <Header title="Walkers" />
            <View style={styles.container}>
                <View >
                    <Searchbar
                        placeholder="Search dog breed"
                        onChange={(text)=>filterWalkers(text.nativeEvent.text)}
                    />
                </View>
                <View>

                    <FlatList
                        contentInset= {{bottom: 250}} 
                        data={filteredWalkers}
                        keyExtractor={walker => walker.login.uuid}
                        renderItem={({ item }) => {
                            return (
                                <Entries walker={item} />
                            )
                        }}
                    />
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Walkers

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10
    },
    serviceBox: {
        padding: 10
    },
    bigText: {
        fontSize: 16,
    }
})
