import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const HistoryPage = ({ navigation }) => {
    const [history, setHistory] = useState([]);

    const historyData = [
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
        { id: 2, title: 'Fever', description: 'Went to AJ' },
        { id: 1, title: 'Cancer', description: 'Went for Manipal' },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const value = await AsyncStorage.getItem('user');
                console.log(value)
                const tokenData = {
                    token: JSON.parse(value)
                }
                console.log(tokenData)
                const { data } = await axios.post('http://192.168.24.81:5001/getHistory', tokenData);
                console.log(JSON.stringify(data.data.histories));
                setHistory(data.data.histories);
            } catch (error) {
                console.error('Error fetching history:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure this effect runs only once


    const navigateToDetail = (disease, desc, hospital, amount) => {
        navigation.navigate('Description', {
            disease,
            desc,
            hospital,
            amount
        });
    };

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {history && history.map(item => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigateToDetail(item.disease, item.desc, item.hospital, item.amount)}
                    >
                        <Text style={styles.title}>Disease : {item.disease}</Text>
                        <Text style={styles.description}>Hospital : {item.hospital}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        paddingTop: 20,
    },
    card: {
        backgroundColor: '#e0e0e0',
        padding: 15,
        paddingLeft: 20,
        paddingTop: 20,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 2,          // Added border width
        borderColor: 'black',   // Added border color
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
    },
});

export default HistoryPage;
